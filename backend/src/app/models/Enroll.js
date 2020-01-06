import { Model } from 'sequelize';
import { isBefore, isAfter } from 'date-fns';
import { Sequelize } from '../../../models';

class Enroll extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_at: Sequelize.DATE,
        end_at: Sequelize.DATE,
        price: Sequelize.INTEGER,
        // created_at: Sequelize.DATE,
        // updated_at: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, ['start_at', 'end_at']),
          get() {
            return (
              isBefore(this.get('start_at'), new Date()) &&
              isAfter(this.get('end_at'), new Date())
            );
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}
export default Enroll;
