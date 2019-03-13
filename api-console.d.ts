/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-console.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../raml-aware/raml-aware.d.ts" />
/// <reference path="../app-layout/app-drawer/app-drawer.d.ts" />
/// <reference path="../app-layout/app-drawer-layout/app-drawer-layout.d.ts" />
/// <reference path="../app-layout/app-header/app-header.d.ts" />
/// <reference path="../app-layout/app-header-layout/app-header-layout.d.ts" />
/// <reference path="../app-layout/app-scroll-effects/app-scroll-effects.d.ts" />
/// <reference path="../app-layout/app-toolbar/app-toolbar.d.ts" />
/// <reference path="../app-route/app-location.d.ts" />
/// <reference path="../app-route/app-route.d.ts" />
/// <reference path="../api-navigation/api-navigation.d.ts" />
/// <reference path="../api-documentation/api-documentation.d.ts" />
/// <reference path="../api-request-panel/api-request-panel.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-toast/paper-toast.d.ts" />
/// <reference path="../iron-media-query/iron-media-query.d.ts" />
/// <reference path="../api-console-ext-comm/api-console-ext-comm.d.ts" />
/// <reference path="../amf-helper-mixin/amf-helper-mixin.d.ts" />

declare namespace MulesoftApps {

  /**
   * # The API Console
   *
   * The API console for RAML (Restful Api Modeling Language) documents.
   * The RAML Console allows browsing of API documentation and in-browser testing of API methods.
   */
  class ApiConsole extends
    ApiElements.AmfHelperMixin(
    Object) {

    /**
     * Generated AMF json/ld model form the API spec.
     * The element assumes the object of the first array item to be a
     * type of `"http://raml.org/vocabularies/document#Document`
     * on AMF vocabulary.
     *
     * It is only usefult for the element to resolve references.
     */
    amfModel: object|any[]|null;

    /**
     * You can use `raml-aware` component to pass AMF data to the console.
     * Raml aware uses monostate pattern to pass the data to any other
     * instance of the same component and receives updates from them.
     *
     * When using `<raml-aware>` set it's `scope` property to some name
     * and this property to the same name. Once you update `raml` property
     * on the aware it updates the model in the console.
     */
    aware: string|null|undefined;

    /**
     * It is current selection from the navigation represented
     * as an `@id` property of the AMD json/ld model.
     *
     * This property is updated internally when the user performs a navigation.
     * Change this property (with `selectedShapeType` property if needed)
     * to force the console to render specific view.
     *
     * ## example
     * ```
     * file://demo/models/api-name/api.raml#/web-api/end-points/%2Ftest-endpoint
     * ```
     */
    selectedShape: string|null|undefined;

    /**
     * One of recognizable bby the console types of currently rendered
     * documentation. It can be one of:
     *
     * - summary
     * - documentation
     * - type
     * - security
     * - endpoint
     * - method
     *
     * Use it with combination of setting `selectedShape` property to control
     * the view.
     */
    selectedShapeType: string|null|undefined;

    /**
     * Computed value, true if current selection represent a method
     */
    readonly isMethod: boolean|null|undefined;

    /**
     * Location of the AMF json/ld model. It can be an endpoint that
     * produces AMF model or a file that contains generated model.
     *
     * When changed it download's data from the location
     * and assigns value to the `amfModel` property.
     *
     * ## Example
     * ```html
     * <api-console model-location="https://amf-parser/domain.com"></api-console>
     * ```
     */
    modelLocation: string|null|undefined;

    /**
     * Currently rendered page. It can be either `docs` or `request`.
     */
    page: string|null|undefined;

    /**
     * Computed value (read only), `true` when current page is the
     * request panel.
     */
    readonly isRequest: boolean|null|undefined;

    /**
     * Computed value (read only), `true` when current page is the
     * documentation panel.
     */
    readonly isDocs: boolean|null|undefined;

    /**
     * The API console works with API console extension that proxies
     * request through Chrome extension's sandbox and eliminates CORS.
     *
     * The banner informing a user about the extension is rendered
     * automatically unless this property is set.
     */
    noExtensionBanner: boolean|null|undefined;

    /**
     * When set the extension banner is rendered.
     */
    readonly extensionBannerActive: boolean|null|undefined;
    _hasApicCorsExtension: boolean|null|undefined;

    /**
     * Forces the console to send headers defined in this string overriding
     * any used defined header.
     * It can be useful if the console has to send any headers string
     * to a server without user knowing about it.
     * The headers should be valid HTTP headers string.
     */
    appendHeaders: string|null|undefined;

    /**
     * If true it forces the console to render narrow layout.
     * This hides left hand side navigation and some fonts are smaller
     * (like titles).
     */
    narrow: boolean|null|undefined;

    /**
     * If set every request made from the console will be proxied by the service provided in this
     * value.
     * It will prefix entered URL with the proxy value. so the call to
     * `http://domain.com/path/?query=some+value` will become
     * `https://proxy.com/path/http://domain.com/path/?query=some+value`
     *
     * If the proxy require a to pass the URL as a query parameter define value as follows:
     * `https://proxy.com/path/?url=`. In this case be sure to set `proxy-encode-url`
     * attribute.
     */
    proxy: string|null|undefined;

    /**
     * If `proxy` is set, it will URL encode the request URL before appending it to the proxy URL.
     * `http://domain.com/path/?query=some+value` will become
     * `https://proxy.com/?url=http%3A%2F%2Fdomain.com%2Fpath%2F%3Fquery%3Dsome%2Bvalue`
     */
    proxyEncodeUrl: boolean|null|undefined;

    /**
     * If set then the API console hide the "try it" button from the
     * method documentation view. The request and response panels still will
     * be available, but to enter this section you'll have to do it
     * programatically.
     */
    noTryIt: boolean|null|undefined;

    /**
     * If set, the open navigation button will be always hidden.
     * The left hand side navigation will be hidden until `navigationOpened`
     * property is set.
     * The navigation will cover full screen, hiding the content.
     * This works best with `narrow` layout.
     */
    manualNavigation: boolean|null|undefined;

    /**
     * True when navigation is opened.
     */
    navigationOpened: boolean|null|undefined;

    /**
     * A width when the navigation drawer is automatically toggled to narrow
     * view.
     * By default it is `640px`.
     *
     * To control width of the navigation drawer, set `--app-drawer-width`
     * CSS variable to requested size.
     */
    responsiveWidth: string|null|undefined;

    /**
     * Computed value, true when the navigation drawer should be hidden
     * event with wide layout.
     */
    readonly _narrowNavForced: boolean|null|undefined;

    /**
     * Location of the `bower_components` folder.
     * It should be a path from server's root path including bower_components.
     */
    bowerLocation: string|null|undefined;

    /**
     * OAuth2 redirect URI.
     * By default the app uses `bowerLocation` to compute redirect location
     * URI. If you set this value if has to work with authorization
     * component meaning it has to pass auth data to the opener window or
     * top frame.
     * See documentation for `advanced-rest-client/oauth-authorization`
     * for API details.
     */
    redirectUri: string|null|undefined;

    /**
     * Hides the URL editor from the view.
     * Note that the editor is still in the DOM. This property just hiddes
     * it.
     */
    noUrlEditor: boolean|null|undefined;

    /**
     * A base URI for the API. To be set if RAML spec is missing `baseUri`
     * declaration and this produces invalid URL input. This information
     * is passed to the URL editor that prefixes the URL with `baseUri` value
     * if passed URL is a relative URL.
     */
    baseUri: string|null|undefined;

    /**
     * Removes the "Powered by Mulesoft" attribution from the main navigation.
     * The use of this feature must be in accordance with all licensing
     * and copyright protections required by the use of this software
     */
    noAttribution: boolean|null|undefined;

    /**
     * Computed value of AMF model of a type of `http://schema.org/WebAPI`
     */
    readonly webApi: object|null;

    /**
     * Computed title of the API
     */
    readonly apiTitle: string|null|undefined;

    /**
     * If true then current browser is Chrome.
     * Used to determine if the console should render the extension banner.
     */
    readonly isChrome: boolean|null|undefined;

    /**
     * True when the main layout element renders in narrow view.
     * This changes when media query breakpoint has been reached or
     * when narrow property is set.
     */
    layoutNarrow: boolean|null|undefined;

    /**
     * An alignment of the layout drawer.
     * Possible values are:
     * - start
     * - end
     *
     * Default to "start".
     */
    drawerAlign: string|null|undefined;

    /**
     * If set the top toolbars are not rendered.
     */
    noToolbars: boolean|null|undefined;

    /**
     * By default API console renders itself as an embeddable
     * web component that has changed behavior of main layout elements
     * (menu drawer and main view). When this option is set it renders
     * layout elements in it's static positions instead relative.
     *
     * Note, this option is experimental and mey be removed.
     */
    app: boolean|null|undefined;

    /**
     * When true it places try it panel next to the documentation panel.
     * It is set automatically via media queries
     */
    wideLayout: boolean|null|undefined;

    /**
     * If set then it renders methods documentation inline with
     * the endpoint documentation.
     * When it's not set (or value is `false`, default) then it renders
     * just a list of methods with links in the documentation panel
     */
    inlineMethods: boolean|null|undefined;
    readonly _renderInlineTyit: boolean|null|undefined;
    readonly _noTryItValue: boolean|null|undefined;

    /**
     * Computed value from the method model, name of the method.
     * It is either a `displayName` or HTTP method name
     */
    readonly methodName: string|null|undefined;

    /**
     * Scroll target used to observe `scroll` events.
     * Set it to a parent element that is a scroll region (has overflow set)
     * so the app can handle scrolling properly.
     */
    scrollTarget: object|null|undefined;

    /**
     * Option passed to the try it panel.
     * When set it allows to disable parameters in an editor (headers,
     * query parameters). Disabled parameter won't be used with a test call
     * but won't be removed from the UI.
     */
    allowDisableParams: boolean|null|undefined;

    /**
     * Option passed to the try it panel.
     * When set, editors renders "add custom" button that allows to define
     * custom parameters next to API spec defined.
     */
    allowCustom: boolean|null|undefined;

    /**
     * Option passed to the try it panel.
     * Enables auto hiding of optional properties (like query parameters
     * or headers) and renders a checkbox to render optional items in the
     * editor view.
     */
    allowHideOptional: boolean|null|undefined;

    /**
     * Prohibits rendering documentation (the icon and the
     * description) in request editors.
     */
    noDocs: boolean|null|undefined;

    /**
     * A HTML element used to listen for events on.
     * If you use one than more API console elements on single page
     * at the same time wrap the console is a HTML element (eg div) and
     * set this value to the container so the request panel only listen
     * to events dispatched inside the container. Otherwise events dispatched
     * by the request panel will be handled by other instances of the console.
     */
    eventsTarget: Element|null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    ready(): void;

    /**
     * Loads model from a file described in `modelLocation` property.
     * This function is called automatically when the value of the property
     * change.
     *
     * @param url Model location
     */
    _modelLocationChanged(url: String|null): void;

    /**
     * Called by `_modelLocationChanged` when model data are read from remote location.
     */
    _apiLoadEndHandler(xhr: XMLHttpRequest|null): void;

    /**
     * Called by `_modelLocationChanged` when error occurred when getting API data.
     */
    _apiLoadErrorHandler(error: Error|null): void;

    /**
     * Handler for the `tryit-requested` event. Sets current screen to
     * `request`.
     */
    _tryitHandler(): void;

    /**
     * Resets current selection to "summary" page
     */
    resetSelection(): void;

    /**
     * Computes value of `apiTitle` property.
     *
     * @param shape Shape of AMF model.
     * @returns Description if defined.
     */
    _computeApiTitle(shape: object|null): String|null|undefined;

    /**
     * Computes value for `isRequest` property.
     *
     * @param page Currently selected page.
     */
    _computeIsRequest(page: String|null): Boolean|null;

    /**
     * Computes value for `isDocs` property.
     *
     * @param page Currently selected page.
     */
    _computeIsDocs(page: String|null): Boolean|null;

    /**
     * Renders the extension banner if is Chrome and extension is not detected.
     */
    _initExtensionBanner(): void;

    /**
     * Dismisses Chrome extension banner.
     */
    dismissExtensionBanner(): void;

    /**
     * Handler for the navigation event dispatched by the `api-navigation`
     * component.
     */
    _apiNavigationOcurred(e: CustomEvent|null): void;

    /**
     * Closes "try it" panel and restores docs view.
     */
    closeTryIt(): void;

    /**
     * Computes value of `_narrowNavForced` property.
     */
    _computeNarrowNavForced(manualNavigation: Boolean|null, narrow: Boolean|null): Boolean|null;

    /**
     * When the console is initialized when being hidden
     * it may not layout properly. The app drawer layout component
     * positions elements statically so if the console is hidden it cannot do
     * this properly. In this case call `resetLayout()` function
     * when getting the console back from the hidden state.
     */
    resetLayout(): void;

    /**
     * Dispatches `api-console-ready` event that is used by APIC extension
     * so it can initialize itself when handled
     */
    _notifyApicExtension(): void;

    /**
     * Controls behavior if the extension banner.
     *
     * @param value Current value of `noExtensionBanner` property
     */
    _noExtBannerChanged(value: Boolean|null): void;
    _hasCorsExtensionChanged(value: any): void;

    /**
     * Computes value of `isMethod` proiperty.
     *
     * @param selectedShapeType Current value of `selectedShapeType`
     * property
     * @returns True if current selection represent a method
     */
    _computeIsMethod(selectedShapeType: String|null): Boolean|null;

    /**
     * Computes value for `_renderInlineTyit` property.
     *
     * @returns True if is wideLayout, it is a method, it is the app
     * and when inlineMethods is not set.
     */
    _computeRenderInlineTryIt(wideLayout: Boolean|null, isMethod: Boolean|null, app: Boolean|null, inlineMethods: Boolean|null): Boolean|null;
    _computeNoTryItValue(noTryIt: any, renderInlineTyit: any): any;

    /**
     * Computes method name for not-wide view, where the request panel
     * has close button.
     *
     * @param isMethod Current state of `isMethod` property
     * @param selected Curerently selected AMF shape (@id).
     * @param webApi Computed AMF WebAPI model.
     * @returns Name of current method (verb) as RAML's
     * `displayName` property or name of the HTTP method.
     */
    _computeMethodName(isMethod: Boolean|null, selected: String|null, webApi: object|null): String|Undefined|null;
  }
}

interface HTMLElementTagNameMap {
  "api-console": MulesoftApps.ApiConsole;
}