/**
 * gygyyggygygy
 * @since 1.0
 * @author baeldung
 * @version 1.0
 */
package payments;

public enum TypesOfPayment {
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
    public static TypesOfPayment convert(final String str) {
        for (TypesOfPayment type : TypesOfPayment.values()) {
            if (type.toString().equals(str)) {
                return type;
            }
        }
        return null;
    }
}

