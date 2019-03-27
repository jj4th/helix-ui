import { HXFormControlElement } from './HXFormControlElement';

/**
 * Defines behavior for the `<hx-select-control>` element.
 *
 * @extends HXFormControlElement
 * @hideconstructor
 * @since 0.16.0
 */
export class HXCheckboxControlElement extends HXFormControlElement {
    /** @override */
    static get is () {
        return 'hx-checkbox-control';
    }

    /** @override */
    $onCreate () {
        this._onCtrlBlur = this._onCtrlBlur.bind(this);
        this._onCtrlChange = this._onCtrlChange.bind(this);
    }

    /** @override */
    $onConnect () {
        let ctrl = this.controlElement;
        if (ctrl) {
            ctrl.addEventListener('change', this._onCtrlChange);
            ctrl.addEventListener('blur', this._onCtrlBlur);
        }
    }

    /** @override */
    $onDisconnect () {
        let ctrl = this.controlElement;
        if (ctrl) {
            ctrl.removeEventListener('change', this._onCtrlChange);
            ctrl.removeEventListener('blur', this._onCtrlBlur);
        }
    }

    /**
     * Fetch the first `<input type="checkbox">` descendant
     *
     * @override
     * @readonly
     * @type {?HTMLInputElement}
     */
    get controlElement () {
        return this.querySelector('input[type="checkbox"]');
    }

    /** @private */
    _onCtrlBlur () {
        // communicate state via attribute
        this.$defaultAttribute('hx-touched', '');
    }

    /** @private */
    _onCtrlChange () {
        // communicate state via attribute
        this.$defaultAttribute('hx-changed', '');
    }
}
