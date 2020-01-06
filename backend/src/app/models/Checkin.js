import { Model } from 'sequelize';
import { Sequelize } from '../../../models';

class Checkin extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Enroll, { foreignKey: 'student_id', as: 'enroll' });
  }
}
export default Checkin;
