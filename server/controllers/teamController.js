import Team from '../db/models/team';

class TeamClass {
  static async addTeam(req, res) {
    try {
      const { isAdmin } = req.authUser;  

      const { name } = req.body;
      if (isAdmin) {
        const team = new Team({
          name 
        });
       team.save();
      return res.status(201).json({
        status: 201,
        message: 'Team Added Successfully',
        team,
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
  static async removeTeam(req, res) {
    try {
      const { id } = req.params;
      const { isAdmin } = req.authUser; 

      if (isAdmin) {

        const result = await Team.findOneAndDelete({_id: id});
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'Team not found',
          });
        }
      return res.status(203).json({
        status: 203,
        message: 'Team Deleted Successfully',
      });
      }
            
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }
  static async updateTeam(req, res) {
    try {
      const { id } = req.params;
      const { isAdmin } = req.authUser; 
      
      if (isAdmin) {
        const { name } = req.body;
        const result = await Team.updateOne({ _id:id }, {name});
        if (result.n != 1) {
          return res.status(404).json({
            status: 404,
            message: 'Team not found',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Team Updated Successfully',
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
  static async viewTeams(req, res) {
    try {
      
        const result = await Team.find();
        if (!result) {
          return res.status(404).json({
            status: 404,
            message: 'Teams are yet to be created',
          });
        }
      return res.status(200).json({
        status: 200,
        message: 'Teams Fetched Successfully',
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

export default TeamClass;
