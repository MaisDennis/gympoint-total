import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const { title, duration, price } = await Plan.create(req.body);
    console.log('Store Successful');
    return res.json({ title, duration, price });
  }

  async index(req, res) {
    const plans = await Plan.findAll({
      where: { canceled_at: null },
    });
    console.log('List Successful');
    return res.json(plans);
  }

  async update(req, res) {
    const { title } = req.body;
    const plan = await Plan.findByPk(req.body.id);
    const { duration, price } = await plan.update(req.body);
    console.log('Update Successful');
    return res.json({ title, duration, price });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);
    plan.canceled_at = new Date();
    await plan.save(); // plan.save() should come after actions to affect db.
    console.log('Delete succesful');
    return res.json(plan);
  }
}

export default new PlanController();
