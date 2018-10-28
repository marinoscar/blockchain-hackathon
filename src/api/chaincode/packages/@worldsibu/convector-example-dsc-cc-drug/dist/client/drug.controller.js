"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var DrugControllerClient = /** @class */ (function (_super) {
    tslib_1.__extends(DrugControllerClient, _super);
    function DrugControllerClient(adapter, user) {
        var _this = _super.call(this) || this;
        _this.adapter = adapter;
        _this.user = user;
        _this.name = 'drug';
        return _this;
    }
    DrugControllerClient.prototype.create = function (id, name, created) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'create', this.user, id, name, created)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DrugControllerClient.prototype.transfer = function (drugId, to, reportHash, reportUrl, modified) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'transfer', this.user, drugId, to, reportHash, reportUrl, modified)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DrugControllerClient;
}(convector_core_controller_1.ConvectorController));
exports.DrugControllerClient = DrugControllerClient;
//# sourceMappingURL=drug.controller.js.map