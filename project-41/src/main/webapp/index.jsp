<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <%@page contentType="text/html;charset=utf-8"%>
    <title>Internet banking</title>
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
<%@ page import="java.io.File" %>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory" %>
<%@ page import="javax.xml.parsers.DocumentBuilder" %>
<%@ page import="org.w3c.dom.Document" %>
<%@ page import="org.w3c.dom.NodeList" %>
<%@ page import="org.w3c.dom.Node" %>
<%@ page import="org.w3c.dom.Element" %>
<%@ page import="org.w3c.dom.Element" %>

<%@ page import="payments.TypesOfPayment" %>
<%@ page import="payments.Payment" %>

<body>
<div class="container">
    <h1 class="page-title">Payments</h1>
    <%
        try {
            File fXmlFile = new File("C:\\Users\\User\\Pictures\\WebApp\\src\\main\\webapp\\Payment.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(fXmlFile);

            doc.getDocumentElement().normalize();
    %>
    <table class="payments-table">
        <tr>
            <th>Тип</th>
            <th>Название</th>
            <th>Номер карты</th>
            <th>Сумма</th>
            <th>Отправитель</th>
            <th>Получатель</th>
        </tr>
        <%
            NodeList payments = doc.getElementsByTagName("payments");
            double avgAmount = 0.0;
            for (int i = 0; i < payments.getLength(); i++) {
                Node nNode = payments.item(i);
                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element eElement = (Element) nNode;
                    new Payment(TypesOfPayment.convert(eElement.getAttribute("enum_type")), eElement.getElementsByTagName("name").item(0).getTextContent(), eElement.getAttribute("number_card"),  Double.parseDouble(eElement.getAttribute("amount")), eElement.getAttribute("sender"), eElement.getAttribute("recipient"));
                    avgAmount+=Double.parseDouble(eElement.getAttribute("amount"));
        %>
        <tr>
            <td><%out.println(eElement.getAttribute("type"));%></td>
            <td><%out.println(eElement.getElementsByTagName("name").item(0).getTextContent());%></td>
            <td><%out.println(eElement.getAttribute("number_card"));%></td>
            <td><%out.println(eElement.getAttribute("amount"));%></td>
            <td><%out.println(eElement.getAttribute("sender"));%></td>
           <td><%out.println(eElement.getAttribute("recipient"));%></td>
        </tr>
        <%
                }
            }
        %>
    </table>
    <h2 class="statistics">Статистика</h2>
    <p class="stat">
        <%out.println("Общее число платежей: " + payments.getLength());%><br>
        <%out.println("Средняя сумма платежа : " + (avgAmount / payments.getLength()) + "BYN");%><br>
        <%out.println("Общее число коммунальных платежей : " + Payment.getHowManyPayment(types_of_payments.COMMUNAL_PAYMENTS));%><br>
        <%out.println("Общее число платежей до востребования: " + Payment.getHowManyPayment(types_of_payments.INTERNET));%><br>
        <%out.println("Общее число краткосрочных платежей : " + Payment.getHowManyPayment(types_of_payments.PHONE));%><br>
        <%out.println("Общее число долгосрочных депозитов : " + Payment.getHowManyPayment(types_of_payments.ARBITRARY_PAYMENTS));%><br>
    </p>
    <%
        } catch (Exception e) {
            e.printStackTrace();
        }
    %>
</div>
</body>
</html>
