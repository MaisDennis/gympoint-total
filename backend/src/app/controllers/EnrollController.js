import { addMonths, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Enroll from '../models/Enroll';
import Plan from '../models/Plan';
import User from '../models/User';
import Student from '../models/Student';
import Mail from '../../lib/Mail';

class EnrollController {
  async store(req, res) {
    const { student_id, plan_id, start_at } = req.body;
    // const { student_id, plan_id } = await Enroll.create(req.body);
    const plan = await Plan.findByPk(plan_id);
    const price = plan.duration * plan.price;
    const end_at = addMonths(parseISO(start_at), plan.duration);
    const enroll = await Enroll.create({
      user_id: req.userId,
      student_id,
      plan_id,
      start_at,
      end_at,
      price,
    });

    const student = await Student.findByPk(student_id);
    await Mail.sendMail({
      to: `${student.name} <${student.email_student}>`,
      subject: 'New Enrollment',
      template: 'enrolls',
      context: {
        student: student.name,
        plan: plan.title,
        endDate: format(end_at, "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
        totalPayment: price,
        date: format(parseISO(start_at), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
      /* text: `Welcome to Gympoint.
         Plan: ${plan.title},
         End Date: ${end_at},
         Total Payment: $${price}`, */
    });

    return res.json(enroll);
  }

  async index(req, res) {
    const enroll = await Enroll.findAll({
      where: { canceled_at: null },
      order: ['start_at'],
      attributes: [
        'id',
        'student_id',
        'plan_id',
        'start_at',
        'end_at',
        'price',
        'active',
      ],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });
    console.log('List Successful');
    return res.json(enroll);
  }

  async update(req, res) {
    const { id, student_id, plan_id, start_at } = req.body;
    const plan = await Plan.findByPk(plan_id);
    const enroll = await Enroll.findByPk(id);
    const price = plan.duration * plan.price;
    const end_at = addMonths(parseISO(start_at), plan.duration);
    const updatedEnroll = await enroll.update({
      user_id: req.userId,
      student_id,
      plan_id,
      start_at,
      end_at,
      price,
    });
    console.log({ price, end_at });
    return res.json(updatedEnroll);
  }

  async delete(req, res) {
    const enroll = await Enroll.findByPk(req.params.id);
    enroll.canceled_at = new Date();
    await enroll.save(); // plan.save() should come after actions to affect db.
    console.log('Delete succesful');
    return res.json(enroll);
  }
}

export default new EnrollController();
