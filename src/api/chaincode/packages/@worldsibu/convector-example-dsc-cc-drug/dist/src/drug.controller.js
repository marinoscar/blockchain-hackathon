"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var drug_model_1 = require("./drug.model");
var DrugController = /** @class */ (function (_super) {
    tslib_1.__extends(DrugController, _super);
    function DrugController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrugController.prototype.create = function (id, name, created) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists, drug;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, drug_model_1.Drug.getOne(id)];
                    case 1:
                        exists = _a.sent();
                        if (exists.id === id) {
                            throw new Error('There is already one drug with that unique id');
                        }
                        drug = new drug_model_1.Drug(id);
                        drug.name = name;
                        // Initialize the object!
                        drug.createdBy = this.sender;
                        drug.modifiedBy = this.sender;
                        drug.holder = this.sender;
                        drug.created = created;
                        drug.modified = created;
                        return [4 /*yield*/, drug.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DrugController.prototype.transfer = function (drugId, to, reportHash, reportUrl, modified) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var drug, report;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, drug_model_1.Drug.getOne(drugId)];
                    case 1:
                        drug = _a.sent();
                        if (drug.holder !== this.sender) {
                            throw new Error('The current holder is the only user capable of transferring the drug in the value chain.');
                        }
                        // Change the holder.
                        drug.holder = to;
                        report = {
                            url: reportUrl,
                            hash: reportHash
                        };
                        if (drug.reports) {
                            drug.reports.push(report);
                        }
                        else {
                            drug.reports = [report];
                        }
                        // Update as modified
                        drug.modifiedBy = this.sender;
                        drug.modified = modified;
                        return [4 /*yield*/, drug.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.number()))
    ], DrugController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(3, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(4, convector_core_controller_1.Param(yup.number()))
    ], DrugController.prototype, "transfer", null);
    DrugController = tslib_1.__decorate([
        convector_core_controller_1.Controller('drug')
    ], DrugController);
    return DrugController;
}(convector_core_controller_1.ConvectorController));
exports.DrugController = DrugController;
//# sourceMappingURL=drug.controller.js.map