"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var participant_model_1 = require("./participant.model");
var ParticipantController = /** @class */ (function (_super) {
    tslib_1.__extends(ParticipantController, _super);
    function ParticipantController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParticipantController.prototype.register = function (participant) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                participant.id = this.sender;
                participant.save();
                return [2 /*return*/];
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(participant_model_1.Participant))
    ], ParticipantController.prototype, "register", null);
    ParticipantController = tslib_1.__decorate([
        convector_core_controller_1.Controller('participant')
    ], ParticipantController);
    return ParticipantController;
}(convector_core_controller_1.ConvectorController));
exports.ParticipantController = ParticipantController;
//# sourceMappingURL=participant.controller.js.map