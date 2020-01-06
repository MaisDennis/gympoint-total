import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Helporder from '../models/Helporder';
import Student from '../models/Student';
import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { helporder, student } = data;
    await Mail.sendMail({
      to: `${student.name} <${student.email_student}>`,
      subject: 'Help-order',
      template: 'answers',
      context: {
        student: student.name,
        createDate: format(
          parseISO(helporder.createdAt),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        question: helporder.question,
        answerDate: format(
          parseISO(helporder.answered_at),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
        answer: helporder.answer,
      },
    });
  }
}

export default new AnswerMail();
