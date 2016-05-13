goog.module('_angular$core$testing');
var fake_async_1 = goog.require('_angular$core$testing$fake__async');
exports.fakeAsync = fake_async_1.fakeAsync;
exports.clearPendingTimers = fake_async_1.clearPendingTimers;
exports.tick = fake_async_1.tick;
exports.flushMicrotasks = fake_async_1.flushMicrotasks;
var lang_utils_1 = goog.require('_angular$core$testing$lang__utils');
exports.getTypeOf = lang_utils_1.getTypeOf;
exports.instantiateType = lang_utils_1.instantiateType;
var logger_1 = goog.require('_angular$core$testing$logger');
exports.Log = logger_1.Log;
var ng_zone_mock_1 = goog.require('_angular$core$testing$ng__zone__mock');
exports.MockNgZone = ng_zone_mock_1.MockNgZone;
var regexp_1 = goog.require('_angular$core$testing$regexp');
exports.containsRegexp = regexp_1.containsRegexp;
var test_injector_1 = goog.require('_angular$core$testing$test__injector');
exports.async = test_injector_1.async;
exports.TestInjector = test_injector_1.TestInjector;
exports.getTestInjector = test_injector_1.getTestInjector;
exports.setBaseTestProviders = test_injector_1.setBaseTestProviders;
exports.resetBaseTestProviders = test_injector_1.resetBaseTestProviders;
exports.inject = test_injector_1.inject;
exports.InjectSetupWrapper = test_injector_1.InjectSetupWrapper;
exports.withProviders = test_injector_1.withProviders;
exports.injectAsync = test_injector_1.injectAsync;
var testing_1 = goog.require('_angular$core$testing$testing');
exports.expect = testing_1.expect;
exports.afterEach = testing_1.afterEach;
exports.describe = testing_1.describe;
exports.ddescribe = testing_1.ddescribe;
exports.fdescribe = testing_1.fdescribe;
exports.xdescribe = testing_1.xdescribe;
exports.beforeEachProviders = testing_1.beforeEachProviders;
exports.beforeEach = testing_1.beforeEach;
exports.it = testing_1.it;
exports.xit = testing_1.xit;
exports.iit = testing_1.iit;
exports.fit = testing_1.fit;
var mock_application_ref_1 = goog.require('_angular$core$testing$mock__application__ref');
exports.MockApplicationRef = mock_application_ref_1.MockApplicationRef;
//# sourceMappingURL=testing.js.map