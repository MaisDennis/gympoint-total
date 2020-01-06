import { Model } from 'sequelize';
import { Sequelize } from '../../../models';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        helporder_id: Sequelize.INTEGER,
        student_id: Sequelize.INTEGER,
        question: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        answer: Sequelize.STRING,
        answered_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Answer;
