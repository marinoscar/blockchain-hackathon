"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Coffee = /** @class */ (function (_super) {
    tslib_1.__extends(Coffee, _super);
    function Coffee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'com.blockchain.hackathon.coffee';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly()
    ], Coffee.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "sku", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "description", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Coffee.prototype, "value", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "variety", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "quality", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "classification", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "category", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "owner", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number())
    ], Coffee.prototype, "createdDate", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "createdBy", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.number())
    ], Coffee.prototype, "modifiedDate", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Coffee.prototype, "modifiedBy", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.array(yup.object()))
    ], Coffee.prototype, "components", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.number())
    ], Coffee.prototype, "locationId", void 0);
    return Coffee;
}(convector_core_model_1.ConvectorModel));
exports.Coffee = Coffee;
//# sourceMappingURL=coffee.model.js.map