var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, instanceAvailability, cordovaInstance } from '@ionic-native/core';
import { Observable } from 'rxjs';
var ThemeableBrowserObject = /** @class */ (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url);
            }
            console.warn('Native: ThemeableBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    ThemeableBrowserObject.prototype.show = function () { return cordovaInstance(this, "show", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.close = function () { return cordovaInstance(this, "close", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.reload = function () { return cordovaInstance(this, "reload", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.hide = function () { return cordovaInstance(this, "hide", { "sync": true }, arguments); };
    ThemeableBrowserObject.prototype.executeScript = function (script) { return cordovaInstance(this, "executeScript", {}, arguments); };
    ThemeableBrowserObject.prototype.insertCss = function (css) { return cordovaInstance(this, "insertCss", {}, arguments); };
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () {
                        return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
                    };
                });
            }
        })();
    };
    return ThemeableBrowserObject;
}());
export { ThemeableBrowserObject };
var ThemeableBrowser = /** @class */ (function (_super) {
    __extends(ThemeableBrowser, _super);
    function ThemeableBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowser.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    ThemeableBrowser.pluginName = "ThemeableBrowser";
    ThemeableBrowser.plugin = "cordova-plugin-themeablebrowser";
    ThemeableBrowser.pluginRef = "cordova.ThemeableBrowser";
    ThemeableBrowser.repo = "https://github.com/initialxy/cordova-plugin-themeablebrowser";
    ThemeableBrowser.platforms = ["Amazon Fire OS", "Android", "Blackberry 10", "Browser", "FirefoxOS", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    ThemeableBrowser = __decorate([
        Injectable()
    ], ThemeableBrowser);
    return ThemeableBrowser;
}(IonicNativePlugin));
export { ThemeableBrowser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RoZW1lYWJsZS1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUE2RCxNQUFNLG9CQUFvQixDQUFDO0FBQy9GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBeUVoQyxnQ0FDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLElBQUk7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2xELEdBQUcsRUFDSCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHlHQUF5RyxDQUMxRyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QscUNBQUk7SUFNSixzQ0FBSztJQU1MLHVDQUFNO0lBUU4sOENBQWEsYUFBQyxNQUF3QztJQVV0RCwwQ0FBUyxhQUFDLEdBQXFDO0lBVy9DLG1DQUFFLGFBQUMsS0FBYTs7O3NEQUFtQjtnQkFDakMsT0FBTyxJQUFJLFVBQVUsQ0FBTSxVQUFBLFFBQVE7b0JBQ2pDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDSjs7O2lDQTFKSDs7OztJQW9Rc0Msb0NBQWlCOzs7O0lBQ3JEOzs7Ozs7T0FNRztJQUNILGlDQUFNLEdBQU4sVUFDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLFlBQXFDO1FBRXJDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQWRVLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0I7MkJBcFE3QjtFQW9Rc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgY29yZG92YTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lYWJsZUJyb3dzZXJCdXR0b24ge1xuICB3d3dJbWFnZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHd3d0ltYWdlUHJlc3NlZD86IHN0cmluZztcbiAgaW1hZ2VQcmVzc2VkPzogc3RyaW5nO1xuICB3d3dJbWFnZURlbnNpdHk/OiBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICBldmVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZWFibGVCcm93c2VyT3B0aW9ucyB7XG4gIHN0YXR1c2Jhcj86IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICB9O1xuICB0b29sYmFyPzoge1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBpbWFnZT86IHN0cmluZztcbiAgfTtcbiAgdGl0bGU/OiB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3RhdGljVGV4dD86IHN0cmluZztcbiAgICBzaG93UGFnZVRpdGxlPzogYm9vbGVhbjtcbiAgfTtcbiAgYmFja0J1dHRvbj86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b247XG4gIGZvcndhcmRCdXR0b24/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uO1xuICBjbG9zZUJ1dHRvbj86IFRoZW1lYWJsZUJyb3dzZXJCdXR0b247XG4gIGN1c3RvbUJ1dHRvbnM/OiBUaGVtZWFibGVCcm93c2VyQnV0dG9uW107XG4gIG1lbnU/OiB7XG4gICAgaW1hZ2U/OiBzdHJpbmc7XG4gICAgaW1hZ2VQcmVzc2VkPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGNhbmNlbD86IHN0cmluZztcbiAgICBhbGlnbj86IHN0cmluZztcbiAgICBpdGVtcz86IHtcbiAgICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgIH1bXTtcbiAgfTtcbiAgYmFja0J1dHRvbkNhbkNsb3NlPzogYm9vbGVhbjtcbiAgZGlzYWJsZUFuaW1hdGlvbj86IGJvb2xlYW47XG5cbiAgLy8gaW5BcHBCcm93c2VyIG9wdGlvbnNcbiAgbG9jYXRpb24/OiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGNsZWFyY2FjaGU/OiBib29sZWFuO1xuICBjbGVhcnNlc3Npb25jYWNoZT86IGJvb2xlYW47XG4gIHpvb20/OiBzdHJpbmc7XG4gIGhhcmR3YXJlYmFjaz86IHN0cmluZztcbiAgbWVkaWFQbGF5YmFja1JlcXVpcmVzVXNlckFjdGlvbj86IHN0cmluZztcbiAgc2hvdWxkUGF1c2VPblN1c3BzZW5kPzogc3RyaW5nO1xuICBjbG9zZWJ1dHRvbmNhcHRpb24/OiBzdHJpbmc7XG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86IHN0cmluZztcbiAgZW5hYmxlVmlld3BvcnRTY2FsZT86IHN0cmluZztcbiAgYWxsb3dJbmxpbmVNZWRpYVBsYXliYWNrPzogc3RyaW5nO1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiBzdHJpbmc7XG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86IHN0cmluZztcbiAgcHJlc2VudGF0aW9uc3R5bGU/OiBzdHJpbmc7XG4gIHRyYW5zaXRpb25zdHlsZT86IHN0cmluZztcbiAgdG9vbGJhcnBvc2l0aW9uPzogc3RyaW5nO1xuICBmdWxsc2NyZWVuPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFRoZW1lYWJsZUJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHN0eWxlT3B0aW9uczogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5UaGVtZWFibGVCcm93c2VyLm9wZW4oXG4gICAgICAgIHVybCxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBzdHlsZU9wdGlvbnNcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOYXRpdmU6IFRoZW1lYWJsZUJyb3dzZXIgaXMgbm90IGluc3RhbGxlZCBvciB5b3UgYXJlIHJ1bm5pbmcgb24gYSBicm93c2VyLiBGYWxsaW5nIGJhY2sgdG8gd2luZG93Lm9wZW4uJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYW4gYnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIGJyb3dzZXIgd2FzIGFscmVhZHkgdmlzaWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGJyb3dzZXIgd2luZG93LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZWxvYWRzIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbG9hZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgSmF2YVNjcmlwdCBjb2RlIGludG8gdGhlIGJyb3dzZXIgd2luZG93LlxuICAgKiBAcGFyYW0gc2NyaXB0ICAgIERldGFpbHMgb2YgdGhlIHNjcmlwdCB0byBydW4sIHNwZWNpZnlpbmcgZWl0aGVyIGEgZmlsZSBvciBjb2RlIGtleS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBleGVjdXRlU2NyaXB0KHNjcmlwdDogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmplY3RzIENTUyBpbnRvIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyAgICAgICBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q3NzKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEF2YWlsYWJsZSBldmVudHMgYXJlOiBgVGhlbWVhYmxlQnJvd3NlckVycm9yYCwgYFRoZW1lYWJsZUJyb3dzZXJXYXJuaW5nYCwgYGNyaXRpY2FsYCwgYGxvYWRmYWlsYCwgYHVuZXhwZWN0ZWRgLCBgdW5kZWZpbmVkYFxuICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55PihvYnNlcnZlciA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBldmVudCxcbiAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIFRoZW1lYWJsZSBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEluLWFwcCBicm93c2VyIHRoYXQgYWxsb3dzIHN0eWxpbmcuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGVtZWFibGVCcm93c2VyLCBUaGVtZWFibGVCcm93c2VyT3B0aW9ucywgVGhlbWVhYmxlQnJvd3Nlck9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGhlbWVhYmxlLWJyb3dzZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lYWJsZUJyb3dzZXI6IFRoZW1lYWJsZUJyb3dzZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGNhbiBhZGQgb3B0aW9ucyBmcm9tIHRoZSBvcmlnaW5hbCBJbkFwcEJyb3dzZXIgaW4gYSBKYXZhU2NyaXB0IG9iamVjdCBmb3JtIChub3Qgc3RyaW5nKVxuICogLy8gVGhpcyBvcHRpb25zIG9iamVjdCBhbHNvIHRha2VzIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBpbnRyb2R1Y2VkIGJ5IHRoZSBUaGVtZWFibGVCcm93c2VyIHBsdWdpblxuICogLy8gVGhpcyBleGFtcGxlIG9ubHkgc2hvd3MgdGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgVGhlbWVhYmxlQnJvd3NlclxuICogLy8gTm90ZSB0aGF0IHRoYXQgYGltYWdlYCBhbmQgYGltYWdlUHJlc3NlZGAgdmFsdWVzIHJlZmVyIHRvIHJlc291cmNlcyB0aGF0IGFyZSBzdG9yZWQgaW4geW91ciBhcHBcbiAqIGNvbnN0IG9wdGlvbnM6IFRoZW1lYWJsZUJyb3dzZXJPcHRpb25zID0ge1xuICogICAgICBzdGF0dXNiYXI6IHtcbiAqICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZmZmJ1xuICogICAgICB9LFxuICogICAgICB0b29sYmFyOiB7XG4gKiAgICAgICAgICBoZWlnaHQ6IDQ0LFxuICogICAgICAgICAgY29sb3I6ICcjZjBmMGYwZmYnXG4gKiAgICAgIH0sXG4gKiAgICAgIHRpdGxlOiB7XG4gKiAgICAgICAgICBjb2xvcjogJyMwMDMyNjRmZicsXG4gKiAgICAgICAgICBzaG93UGFnZVRpdGxlOiB0cnVlXG4gKiAgICAgIH0sXG4gKiAgICAgIGJhY2tCdXR0b246IHtcbiAqICAgICAgICAgIGltYWdlOiAnYmFjaycsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdiYWNrX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnYmFja1ByZXNzZWQnXG4gKiAgICAgIH0sXG4gKiAgICAgIGZvcndhcmRCdXR0b246IHtcbiAqICAgICAgICAgIGltYWdlOiAnZm9yd2FyZCcsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdmb3J3YXJkX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnZm9yd2FyZFByZXNzZWQnXG4gKiAgICAgIH0sXG4gKiAgICAgIGNsb3NlQnV0dG9uOiB7XG4gKiAgICAgICAgICBpbWFnZTogJ2Nsb3NlJyxcbiAqICAgICAgICAgIGltYWdlUHJlc3NlZDogJ2Nsb3NlX3ByZXNzZWQnLFxuICogICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAqICAgICAgICAgIGV2ZW50OiAnY2xvc2VQcmVzc2VkJ1xuICogICAgICB9LFxuICogICAgICBjdXN0b21CdXR0b25zOiBbXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaW1hZ2U6ICdzaGFyZScsXG4gKiAgICAgICAgICAgICAgaW1hZ2VQcmVzc2VkOiAnc2hhcmVfcHJlc3NlZCcsXG4gKiAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gKiAgICAgICAgICAgICAgZXZlbnQ6ICdzaGFyZVByZXNzZWQnXG4gKiAgICAgICAgICB9XG4gKiAgICAgIF0sXG4gKiAgICAgIG1lbnU6IHtcbiAqICAgICAgICAgIGltYWdlOiAnbWVudScsXG4gKiAgICAgICAgICBpbWFnZVByZXNzZWQ6ICdtZW51X3ByZXNzZWQnLFxuICogICAgICAgICAgdGl0bGU6ICdUZXN0JyxcbiAqICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gKiAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAqICAgICAgICAgIGl0ZW1zOiBbXG4gKiAgICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgICBldmVudDogJ2hlbGxvUHJlc3NlZCcsXG4gKiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSGVsbG8gV29ybGQhJ1xuICogICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgICBldmVudDogJ3Rlc3RQcmVzc2VkJyxcbiAqICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUZXN0ISdcbiAqICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICBdXG4gKiAgICAgIH0sXG4gKiAgICAgIGJhY2tCdXR0b25DYW5DbG9zZTogdHJ1ZVxuICogfVxuICpcbiAqIGNvbnN0IGJyb3dzZXI6IFRoZW1lYWJsZUJyb3dzZXJPYmplY3QgPSB0aGlzLnRoZW1lYWJsZUJyb3dzZXIuY3JlYXRlKCdodHRwczovL2lvbmljLmlvJywgJ19ibGFuaycsIG9wdGlvbnMpO1xuICpcbiAqIGBgYFxuICogV2Ugc3VnZ2VzdCB0aGF0IHlvdSByZWZlciB0byB0aGUgcGx1Z2luJ3MgcmVwb3NpdG9yeSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiB1c2FnZSB0aGF0IG1heSBub3QgYmUgY292ZXJlZCBoZXJlLlxuICogQGNsYXNzZXNcbiAqIFRoZW1lYWJsZUJyb3dzZXJPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBUaGVtZWFibGVCcm93c2VyQnV0dG9uXG4gKiBUaGVtZWFibGVCcm93c2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RoZW1lYWJsZUJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10aGVtZWFibGVicm93c2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5UaGVtZWFibGVCcm93c2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pbml0aWFseHkvY29yZG92YS1wbHVnaW4tdGhlbWVhYmxlYnJvd3NlcicsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbWF6b24gRmlyZSBPUycsXG4gICAgJ0FuZHJvaWQnLFxuICAgICdCbGFja2JlcnJ5IDEwJyxcbiAgICAnQnJvd3NlcicsXG4gICAgJ0ZpcmVmb3hPUycsXG4gICAgJ2lPUycsXG4gICAgJ1VidW50dScsXG4gICAgJ1dpbmRvd3MnLFxuICAgICdXaW5kb3dzIFBob25lJ1xuICBdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRoZW1lYWJsZUJyb3dzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYnJvd3NlciBpbnN0YW5jZVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCB0byBvcGVuXG4gICAqIEBwYXJhbSB0YXJnZXQge3N0cmluZ30gVGFyZ2V0XG4gICAqIEBwYXJhbSBzdHlsZU9wdGlvbnMge1RoZW1lYWJsZUJyb3dzZXJPcHRpb25zfSBUaGVtZWFibGUgYnJvd3NlciBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtUaGVtZWFibGVCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHN0eWxlT3B0aW9uczogVGhlbWVhYmxlQnJvd3Nlck9wdGlvbnNcbiAgKTogVGhlbWVhYmxlQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBUaGVtZWFibGVCcm93c2VyT2JqZWN0KHVybCwgdGFyZ2V0LCBzdHlsZU9wdGlvbnMpO1xuICB9XG59XG4iXX0=