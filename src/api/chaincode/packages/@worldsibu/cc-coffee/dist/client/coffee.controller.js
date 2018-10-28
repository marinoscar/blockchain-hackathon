"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var CoffeeControllerClient = /** @class */ (function (_super) {
    tslib_1.__extends(CoffeeControllerClient, _super);
    function CoffeeControllerClient(adapter, user) {
        var _this = _super.call(this) || this;
        _this.adapter = adapter;
        _this.user = user;
        _this.name = 'coffee';
        return _this;
    }
    CoffeeControllerClient.prototype.create = function (id, sku, variety, category, description, value, createdDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'create', this.user, id, sku, variety, category, description, value, createdDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.transfer = function (id, to, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'transfer', this.user, id, to, modifiedDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.updateQuality = function (id, quality, classification, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'updateQuality', this.user, id, quality, classification, modifiedDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.join = function (id, components, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'join', this.user, id, components, modifiedDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.split = function (id, splitIds, modifiedDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'split', this.user, id, splitIds, modifiedDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.getHistory = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'getHistory', this.user, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeControllerClient.prototype.changeLocation = function (id, locationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adapter.invoke(this.name, 'changeLocation', this.user, id, locationId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CoffeeControllerClient;
}(convector_core_controller_1.ConvectorController));
exports.CoffeeControllerClient = CoffeeControllerClient;
//# sourceMappingURL=coffee.controller.js.map