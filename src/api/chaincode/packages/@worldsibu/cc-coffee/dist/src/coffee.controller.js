"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var coffee_model_1 = require("./coffee.model");
var CoffeeController = /** @class */ (function (_super) {
    tslib_1.__extends(CoffeeController, _super);
    function CoffeeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoffeeController.prototype.create = function (id, sku, variety, category, description, value, createdDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists, coffee;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        exists = _a.sent();
                        if (exists.id === id) {
                            throw new Error('There is already one coffee with that unique id');
                        }
                        coffee = new coffee_model_1.Coffee(id);
                        coffee.createdBy = this.sender;
                        coffee.modifiedBy = this.sender;
                        coffee.owner = this.sender;
                        coffee.sku = sku;
                        coffee.variety = variety;
                        coffee.category = category;
                        coffee.description = description;
                        coffee.value = value;
                        coffee.createdDate = createdDate;
                        coffee.modifiedDate = createdDate;
                        return [4 /*yield*/, coffee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoffeeController.prototype.transfer = function (id, to, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        if (coffee.owner !== this.sender) {
                            throw new Error('The current owner is the only user capable of transferring the coffee in the value chain.');
                        }
                        coffee.owner = to;
                        coffee.modifiedBy = this.sender;
                        coffee.modifiedDate = modifiedDate;
                        return [4 /*yield*/, coffee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoffeeController.prototype.updateQuality = function (id, quality, classification, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        if (coffee.owner !== this.sender) {
                            throw new Error('The current owner is the only user capable of update the coffee quality.');
                        }
                        coffee.quality = quality;
                        coffee.classification = classification;
                        coffee.modifiedBy = this.sender;
                        coffee.modifiedDate = modifiedDate;
                        return [4 /*yield*/, coffee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoffeeController.prototype.join = function (id, components, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee, value;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        if (coffee.owner !== this.sender) {
                            throw new Error('The current owner is the only user capable of join the coffee.');
                        }
                        value = 0;
                        components.map(function (component) {
                            if (component.owner !== _this.sender) {
                                throw new Error('The current owner is the only user capable of join components.');
                            }
                            if (coffee.components) {
                                coffee.components.push(component);
                            }
                            else {
                                coffee.components = [component];
                            }
                            value = value + component.value;
                        });
                        coffee.value = value;
                        coffee.modifiedBy = this.sender;
                        coffee.modifiedDate = modifiedDate;
                        return [4 /*yield*/, coffee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoffeeController.prototype.split = function (id, splitIds, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee, value;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        if (coffee.owner !== this.sender) {
                            throw new Error('The current owner is the only user capable of split the coffee.');
                        }
                        value = 0;
                        splitIds.map(function (splitId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var component;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(splitId)];
                                    case 1:
                                        component = _a.sent();
                                        if (component.owner !== this.sender) {
                                            throw new Error('The current owner is the only user capable of split into splits.');
                                        }
                                        if (coffee.components) {
                                            coffee.components.push(component);
                                        }
                                        else {
                                            coffee.components = [component];
                                        }
                                        value = value + component.value;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        if (coffee.value !== value) {
                            throw new Error('The splits value sum should be the same as parents value');
                        }
                        coffee.modifiedBy = this.sender;
                        coffee.modifiedDate = modifiedDate;
                        return [4 /*yield*/, coffee.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoffeeController.prototype.getHistory = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        return [4 /*yield*/, coffee.history()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeController.prototype.changeLocation = function (id, locationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coffee;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_model_1.Coffee.getOne(id)];
                    case 1:
                        coffee = _a.sent();
                        // requires validation of current location owner
                        coffee.locationId = locationId;
                        return [4 /*yield*/, coffee.save()];
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
        tslib_1.__param(2, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(3, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(4, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(5, convector_core_controller_1.Param(yup.number())),
        tslib_1.__param(6, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "transfer", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(3, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "updateQuality", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.array(yup.object()))),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "join", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.array(yup.string()))),
        tslib_1.__param(2, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "split", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string()))
    ], CoffeeController.prototype, "getHistory", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.number()))
    ], CoffeeController.prototype, "changeLocation", null);
    CoffeeController = tslib_1.__decorate([
        convector_core_controller_1.Controller('coffee')
    ], CoffeeController);
    return CoffeeController;
}(convector_core_controller_1.ConvectorController));
exports.CoffeeController = CoffeeController;
//# sourceMappingURL=coffee.controller.js.map