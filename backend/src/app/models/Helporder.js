import { Model } from 'sequelize';
import { Sequelize } from '../../../models';

class Helporder extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        question: Sequelize.STRING,
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
export default Helporder;
