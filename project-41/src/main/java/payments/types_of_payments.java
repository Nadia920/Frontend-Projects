/**
 * gygyyggygygy
 * @since 1.0
 * @author baeldung
 * @version 1.0
 */
package payments;

public enum types_of_payments {
    /** */
    COMMUNAL_PAYMENTS,
    /** */
    INTERNET,
    /** */
    PHONE,
    /** */
    ARBITRARY_PAYMENTS;

    /**
     * @param str
     * @return type
     */
    public static types_of_payments convert(final String str) {
        for (types_of_payments type : types_of_payments.values()) {
            if (type.toString().equals(str)) {
                return type;
            }
        }
        return null;
    }
}
