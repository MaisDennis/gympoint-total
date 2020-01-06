import Helporder from '../models/Helporder';

class HelporderController {
  async store(req, res) {
    const student_id = req.params.id;
    const { question, answer } = req.body;
    const helporder = await Helporder.create({
      student_id,
      question,
      answer,
    });
    return res.json(helporder);
  }

  async index(req, res) {
    const helporder = await Helporder.findAll({
      // attributes: [student_id, question, answer, answered_at],
    });
    return res.json(helporder);
  }

  async update(req, res) {
    const student_id = req.params.id;
    const { question } = req.body;
    const helporder = await Helporder.update({
      student_id,
      question,
      answer,
    });
    return res.json(helporder);
  }
}

export default new HelporderController();
