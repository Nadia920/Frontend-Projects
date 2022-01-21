/**
 * gygyyggygygy
 * @since 1.0
 * @author baeldung
 * @version 1.0
 */
package payments;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public final class Payment {

    /** */
    private int id;
    /** */
    private TypesOfPayment type;
    /** */
    private String title;
    /** */
    private String numberCard;
    /** */
    private double amount;
    /** */
    private String sender;
    /** */
    private String recipient;

    /** */
    private static Map<Integer, Payment> allPayment = new HashMap<>();
    /** */
    private static int countId = 0;

    /**
     * @param typeC
     * @param titleC
     * @param numberCardC
     * @param amountC
     * @param senderC
     * @param recipientC
     */
    public Payment(final TypesOfPayment typeC,
            final  String titleC, final  String numberCardC,
            final double amountC,
            final String senderC, final String recipientC) {
        this.type = typeC;
        this.title = titleC;
        this.numberCard = numberCardC;
        this.amount = amountC;
        this.sender = senderC;
        this.recipient = recipientC;

        if (!hasPayment()) {
            countId++;
            this.id = countId;
            allPayment.put(id, this);
        }
    }

    /**
     * @return bool
     */
    private boolean hasPayment() {
        for (Payment payment : allPayment.values()) {
            if (payment.equals(this)
                    && payment.hashCode() == this.hashCode()) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return  type
     */
    public TypesOfPayment getType() {
        return type;
    }
 /**
     * @return  type
     */
    public String getTitle() {
        return title;
    }
 /**
     * @return  type
     */
    public String getNumberCard() {
        return numberCard;
    }
 /**
     * @return  type
     */
    public double getAmount() {
        return amount;
    }
 /**
     * @return  type
     */
    public String getSender() {
        return sender;
    }
 /**
     * @return  type
     */
    public String getRecipient() {
        return recipient;
    }
 /**
  * @param typeS
     */
    public void setType(final TypesOfPayment typeS) {
        this.type = typeS;
    }
 /**
  * @param titleS
     */
    public void setTitle(final String titleS) {
        this.title = titleS;
    }
 /**
  * @param numberCardS
     */
    public void setTerm(final String numberCardS) {
        this.numberCard = numberCardS;
    }
 /**
  * @param amountS
     */
    public void setPercent(final double amountS) {
        this.amount = amountS;
    }
 /**
  * @param senderS
     */
    public void setSender(final String senderS) {
        this.sender = senderS;
    }
 /**
  * @param recipientS
     */
    public void setRecipient(final String recipientS) {
        this.recipient = recipientS;
    }
 /**
     * @return  type
     */
    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Payment payment = (Payment) o;
        return type == payment.type && Objects.equals(title, payment.title);
    }
 /**
     * @return  type
     */
    @Override
    public int hashCode() {
        return Objects.hash(type, title);
    }
 /**
     * @return  type
     */
    @Override
    public String toString() {
        return "payment.Payment{"
                + "id=" + id
                + ", type=" + type
                + ", title='" + title + '\''
                + ", numberCard='" + numberCard + '\''
                + ", amount=" + amount
                + ", sender='" + sender + '\''
                + ", recipient='" + recipient + '\''
                + '}';
    }

    /**
     * @return arrayList
     */
    public static List<Payment> getAllPayment() {
        return new ArrayList<>(allPayment.values());
    }

     /**
      * @param type
     * @return arrayList
     */
    public static List<Payment> getAllPayment(final TypesOfPayment type) {
        List<Payment> listAllUsers = new ArrayList<>();
        for (Payment payment : allPayment.values()) {
            if (payment.type == type) {
                listAllUsers.add(payment);
            }
        }
        return listAllUsers;
    }

     /**
     * @return size
     */
    public static int getHowManyPayment() {
        return allPayment.size();
    }

    /**
     * @param type
     * @return size
     */
    public static int getHowManyPayment(final TypesOfPayment type) {
        return getAllPayment(type).size();
    }

    /**
     * @return amount
     */
    public static double getAllAmount() {
        double countAmount = 0.0;
        for (Payment payment : allPayment.values()) {
            countAmount += payment.amount;
        }
        return countAmount;
    }

    /**
     * @param type
     * @return amount
     */
    public static double getAllAmount(final TypesOfPayment type) {
        double countAmount = 0.0;
        for (Payment payment : getAllPayment(type)) {
            countAmount += payment.amount;
        }
        return countAmount;
    }

    /**
     * @return amount
     */
    public static double getAverageAmountOfAllPayment() {
        return getAllAmount() / getHowManyPayment();
    }

    /**
     * @param type
     * @return amount
     */
    public static double getAverageAmountOfAllPayment(
            final TypesOfPayment type) {
        return getAllAmount(type) / getHowManyPayment(type);
    }
}
