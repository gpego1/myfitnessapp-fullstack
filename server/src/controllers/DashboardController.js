import DashboardService from "../services/DashboardService.js";

export class DashboardController {
    static async getDashboard(req, res, next) {
        try {
            const dashboard = await DashboardService.generateDashboard(req.userId);
            res.status(200).json(dashboard);
        } catch (error) {
            next(error);
        }
    }
}