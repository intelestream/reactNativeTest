
export default {
    /**
     * Check is a string is Blank
     * @param {String} str 
     */
    isStringBlank (str) {
        return (!str || /^\s*$/.test(str));
    },

    /**
     * Checks if the string provided is a valid email.
     * @param {String} text 
     */
    validateEmail (text) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else {
            return true
        }
    }
}