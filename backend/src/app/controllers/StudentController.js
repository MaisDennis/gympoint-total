import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    // Validação de dados via Yup.
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email_student: Yup.string()
        .email()
        .required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const studentExists = await Student.findOne({
      where: { email_student: req.body.email_student },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    const {
      id,
      name,
      email_student,
      age,
      weight,
      height,
    } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email_student,
      age,
      weight,
      height,
    });
  }

  async update(req, res) {
    // Validação de dados via Yup.
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email_student: Yup.string()
        .email()
        .required(),
      age: Yup.string().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email_student } = req.body;

    const student = await Student.findByPk(req.body.id);

    if (email_student !== student.email_student) {
      const studentExists = await Student.findOne({ where: { email_student } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    const { id, name, weight, height, age } = await student.update(req.body);

    return res.json({
      id,
      name,
      email_student,
      weight,
      height,
      age,
    });
  }

  async index(req, res) {
    const students = await Student.findAll({
      where: { canceled_at: null },
      attributes: [
        'id',
        'name',
        'email_student',
        'age',
        'weight',
        'height',
        'createdAt',
        'updatedAt',
      ],
    });
    console.log('List Successful');
    return res.json(students);
  }

  async delete(req, res) {
    const students = await Student.findByPk(req.params.id);
    students.canceled_at = new Date();
    await students.save(); // plan.save() should come after actions to affect db.
    console.log('Delete succesful');
    return res.json(students);
  }
}
export default new StudentController();
