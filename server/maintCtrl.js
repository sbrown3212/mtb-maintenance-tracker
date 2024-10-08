import { Service, User, Part, Build, PartType } from "../db/model.js";

export const maintFuncs = {
  getMaintData: async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      return res.send({
        message: 'No user in session',
        success: false
      });
    };

    const maintData = await Service.findAll({
      order: [['date', 'DESC']],
      include: {
        model: Part,
        where: {
          userId
        },
        include: [Build, PartType]
      }
    });

    if (!maintData) {
      return res.send({
        message: 'Failed to get maintenance data',
        success: false
      });
    };

    return res.send({
      message: 'Found maintenance data successfully',
      success: true,
      maintData
    });
  },

  addService: async (req, res) => {
    const userId = req.session.id;

    if (!userId) {
      return res.send({
        message: 'No user in session',
        success: false
      });
    };

    const { partId, date, notes } = req.body;

    // console.log();
    // console.log('req.body:', req.body)
    // console.log();

    try {
      Service.create({
        partId,
        date,
        notes
      });

      return res.send({
        message: 'Added new service successfully',
        success: true
      });
    } catch(error) {
      console.log();
      console.error(error);
      console.log();

      return res.send({
        message: 'Failed to add new service',
        success: false
      });
    };
  },

  editService: async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      return res.send({
        message: 'No user in session',
        success: false
      });
    };

    const { serviceId, partId, date, notes } = req.body;

    const serviceToEdit = await Service.findByPk(serviceId);

    if (!serviceToEdit) {
      return res.send({
        message: 'Failed to find service',
        success: false
      });
    };

    console.log();
    console.log('service to be edited:', serviceToEdit);
    console.log();

    try {
      await serviceToEdit.update({
        partId,
        date,
        notes: notes === '' ? null : notes
      });

      return res.send({
        message: 'Service updated successfully',
        success: true
      });
    } catch(error) {
      console.log();
      console.error(error);
      console.log();

      return res.send({
        message: 'Failed to update service',
        success: false
      });
    };
  },

  deleteService: async (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
      return res.send({
        message: 'No user in session',
        success: false
      });
    };

    const { serviceId } = req.params;

    const serviceToDelete = await Service.findByPk(serviceId);

    if (!serviceId) {
      return res.send({
        message: 'Failed to find service',
        success: false
      });
    };

    try {
      serviceToDelete.destroy();

      return res.send({
        message: 'Service deleted successfully',
        success: true
      });
    } catch(error) {
      console.log();
      console.error(error);
      console.log();

      return res.send({
        message: 'Failed to delete service',
        success: false
      });
    };
  }
}