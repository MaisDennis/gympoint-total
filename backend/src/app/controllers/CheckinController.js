import { subDays, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Student from '../models/Student';
import Checkin from '../models/Checkin';
import Enroll from '../models/Enroll';

class CheckinController {
  async store(req, res) {
    const student_id = req.params.id;

    // Check if student is in student DB.
    const studentcheck = await Student.findByPk(student_id);

    if (!studentcheck) {
      return res.status(400).json({ error: 'Non-existent student' });
    }

    // Check if student has and active enrollment.
    const enroll = await Enroll.findAll({
      where: { student_id },
    });

    console.log(enroll, 'OIIIII');

    // Check if there are more than 5 checkins in the last 7 days.
    const checkinPermit = await Checkin.findAndCountAll({
      where: {
        student_id,
        created_at: { [Op.gte]: subDays(new Date(), 7) },
      },
    });
    if (checkinPermit.count > 5) {
      return res
        .status(400)
        .json({ error: 'You have exceeded maximum check-ins' });
    }

    // Create
    const checkin = await Checkin.create({ student_id });
    console.log('Checkin OK');

    return res.json(checkin);
  }

  async index(req, res) {
    const checkin = await Checkin.findAll();

    // const { student_id } = req.params;
    // const { page = 1, quantity = 20 } = req.query;
    // const checkins = await Checkin.findAndCountAll({
    // where: { student_id },
    // limit: quantity,
    // offset: (page - 1) * quantity,
    // });
    console.log('list OK');
    return res.json(checkin);
  }
}
export default new CheckinController();
