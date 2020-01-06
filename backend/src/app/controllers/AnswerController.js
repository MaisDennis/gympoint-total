import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Helporder from '../models/Helporder';
import Student from '../models/Student';
// import Mail from '../../lib/Mail';
import AnswerMail from '../jobs/AnswerMail';
import Queue from '../../lib/Queue';

class AnswerController {
  async update(req, res) {
    const helporder = await Helporder.findByPk(req.body.id);

    const { id, student_id, answer } = await helporder.update(req.body);
    helporder.answered_at = new Date();
    helporder.save();

    const student = await Student.findByPk(student_id);
    console.log(student_id);
    console.log(helporder.createdAt);

    /* await Mail.sendMail({
      to: `${student.name} <${student.email_student}>`,
      subject: 'Help-order',
      template: 'answers',
      context: {
        student: student.name,
        createDate: format(
          helporder.createdAt,
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
         question: helporder.question,
        answerDate: format(
          helporder.answered_at,
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        answer: helporder.answer,
      },
       text: `Welcome to Gympoint.
         Plan: ${plan.title},
         End Date: ${end_at},
         Total Payment: $${price}`,
    }); */
    await Queue.add(AnswerMail.key, { helporder, student });
    return res.json({ id, student_id, answer });
  }
}

export default new AnswerController();
