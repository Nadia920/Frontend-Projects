import payments.Payment;
import payments.types_of_payments;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class TestPayment {
    private Payment payment;
    private Payment payment1;
    private Payment payment2;
    private Payment payment3;
    
    @Before
    public void setUp() throws Exception {
        payment = new Payment(types_of_payments.COMMUNAL_PAYMENTS, "Комунальный платёж", "4567123490563423", 100, "Бакутин А.О.", "Кабак Н.О.");
        payment1 = new Payment(types_of_payments.INTERNET, "Интернет", "2345344567783456", 50, "Соколовская А.А.", "Чуб А.О.");
        payment2 = new Payment(types_of_payments.PHONE, "Телефон", "3489567812673489", 20, "Календа И.Ю.", "Сигаева Л.А.");
        payment3 = new Payment(types_of_payments.ARBITRARY_PAYMENTS, "Произвольный платёж", "5678233490678945", 200, "Гец Н.А.", "Сидорович П.А");
    }


    @Test
    public void getAllUsers_NO_NULL() {
        List<Payment> expected = Payment.getAllPayment();
        Assert.assertNotNull(expected);
    }

    @Test
    public void getAllPayment() {
        List<Payment> expected = Payment.getAllPayment();

        List<Payment> actual = new ArrayList<>();
        actual.add(payment);
        actual.add(payment1);
        actual.add(payment2);
        actual.add(payment3);

        Assert.assertEquals("Списки платежей не совпадают", expected, actual);
    }

    @Test
    public void getAllPayments_COMMUNAL_PAYMENTS() {
        List<Payment> expected = Payment.getAllPayment(types_of_payments.COMMUNAL_PAYMENTS);

        List<Payment> actual = new ArrayList<>();
        actual.add(payment);

        Assert.assertEquals(expected, actual);
    }

    @Test
    public void getHowManyPayment() {
        int expected = Payment.getHowManyPayment();
        int actual = 4;
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void getHowManyPayments_COMMUNAL_PAYMENTS() {
        int expected = Payment.getHowManyPayment(types_of_payments.COMMUNAL_PAYMENTS);
        int actual = 1;
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void getAllAmount() {
        double expected = Payment.getAllAmount();
        double actual = 100.0 + 50.0 + 20.0 + 200;
        Assert.assertEquals(expected, actual, 0);
    }

    @Test
    public void getAllAmount_COMMUNAL_PAYMENTS() {
        double expected = Payment.getAllAmount(types_of_payments.COMMUNAL_PAYMENTS);
        double actual = 100.0;
        Assert.assertEquals(expected, actual, 0);
    }
}