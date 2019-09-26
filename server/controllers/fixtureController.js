import Fixture from '../db/models/fixture';

class FixtureClass {
  static async addFixture(req, res) {
    try {
      const { isAdmin } = req.authUser;  

      const { hostTeamId, awayTeamId, matchDate, isCompleted = false } = req.body;
      const newFixture = {
        hostTeamId,
        awayTeamId,
        matchDate,
        isCompleted
      }

      if (isAdmin) {
        const fixture = new Fixture(
          newFixture 
        );
        fixture.save();
      return res.status(201).json({
        status: 201,
        message: 'Fixture Added Successfully',
        fixture,
      });
      }
      return res.status(401).json({
        status: 401,
        message: 'You are Forbidden  from accessing this resources',
      });      
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async removeFixture(req, res) {
    try {
      const { id } = req.params;
      const { isAdmin } = req.authUser; 

      if (isAdmin) {

        const result = await Fixture.findOneAndDelete({_id: id});
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'Feature not found',
          });
        }
      return res.status(203).json({
        status: 203,
        message: 'Feature Deleted Successfully',
      });
      }
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async updateFixture(req, res) {
    try {
      const { id } = req.params;
      const { isAdmin } = req.authUser; 
      
      if (isAdmin) {
        const { hostTeamId, awayTeamId, matchDate, isCompleted } = req.body;
        const newFixture = {
          hostTeamId,
          awayTeamId,
          matchDate,
          isCompleted
        }
        const result = await Fixture.updateOne({ _id:id }, newFixture);;
        if (result.n != 1) {
          return res.status(404).json({
            status: 404,
            message: 'Fixture not found',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Fixture Updated Successfully',
        result
      });
      }
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async viewFixtures(req, res) {
    try {
      
      const { isAdmin } = req.authUser; 
      
      if (isAdmin) {
        const result = await Fixture.find();
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'Fixture are yet to be created',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Fixture Fetched Successfully',
        result
      });
      }
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async getCompletedFixtures(req, res) {
    try {      
        const result = await Fixture.find({ isCompleted: true });
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'No Fixture is completed yet',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Completed Fixture Fetched Successfully',
        result
      });
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async getPendingFixtures(req, res) {
    try {      
        const result = await Fixture.find({ isCompleted: false });
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'No Pending Fixture',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Pending Fixture Fetched Successfully',
        result
      });
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }


}

export default FixtureClass;
