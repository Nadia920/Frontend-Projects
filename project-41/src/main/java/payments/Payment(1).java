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
    private types_of_payments type;
    /** */
    private String title;
    /** */
    private String number_card;
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
     * @param number_cardC
     * @param amountC
     * @param senderC
     * @param recipientC
     */
    public Payment(final types_of_payments typeC,
            final  String titleC, final  String number_cardC, final double amountC,
            final String senderC, final String recipientC) {
        this.type = typeC;
        this.title = titleC;
        this.number_card = number_cardC;
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
    public types_of_payments getType() {
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
        return number_card;
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
    public void setType(final types_of_payments typeS) {
        this.type = typeS;
    }
 /**
  * @param titleS
     */
    public void setTitle(final String titleS) {
        this.title = titleS;
    }
 /**
  * @param number_cardS
     */
    public void setTerm(final String number_cardS) {
        this.number_card = number_cardS;
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
  * @param currencyS
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
        return "deposite.Deposite{"
                + "id=" + id
                + ", type=" + type
                + ", title='" + title + '\''
                + ", description='" + number_card + '\''
                + ", percent=" + amount
                + ", term='" + sender + '\''
                + ", description='" + recipient + '\''
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
    public static List<Payment> getAllPayment(final types_of_payments type) {
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
    public static int getHowManyPayment(final types_of_payments type) {
        return getAllPayment(type).size();
    }

    /**
     * @return percent
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
     * @return percent
     */
    public static double getAllAmount(final types_of_payments type) {
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
            final types_of_payments type) {
        return getAllAmount(type) / getHowManyPayment(type);
    }
}
