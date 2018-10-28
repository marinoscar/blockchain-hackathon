"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var ParticipantControllerClient = /** @class */ (function (_super) {
    tslib_1.__extends(ParticipantControllerClient, _super);
    function ParticipantControllerClient(adapter, user) {
        var _this = _super.call(this) || this;
        _this.adapter = adapter;
        _this.user = user;
        _this.name = 'participant';
        return _this;
    }
    ParticipantControllerClient.prototype.register = function (participant) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'register', this.user, participant)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ParticipantControllerClient;
}(convector_core_controller_1.ConvectorController));
exports.ParticipantControllerClient = ParticipantControllerClient;
//# sourceMappingURL=participant.controller.js.map