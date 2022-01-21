
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
public class Main extends JFrame {
    public static final int WIDTH = 960;
    public static final int HEIGHT = 540;

    private boolean winFlag;
    public Main() {
        setTitle("Shooting");
        setSize(WIDTH, HEIGHT);
        setLocationRelativeTo(null);//центр
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JPanel content = new JPanel(null);
        setContentPane(content);

        winFlag = false;

        JButton button = new JButton("Старт / Стоп");
        button.setSize(new Dimension(150, 25));
        button.addMouseListener(new MouseListener() {
            private boolean movement = false;

            @Override
            public void mouseClicked(MouseEvent e) {

            }

            @Override
            public void mousePressed(MouseEvent e) {
                if (movement) {
                    Boat.thread.forEach(Thread::suspend);//остановить выполнение потока и снова запустить его при наступлении определенного события
                } else {
                    Boat.thread.forEach(Thread::resume);//продолжить
                }
                movement = !movement;
            }

            @Override
            public void mouseReleased(MouseEvent e) {

            }

            @Override
            public void mouseEntered(MouseEvent e) {

            }

            @Override
            public void mouseExited(MouseEvent e) {

            }
        });
        content.add(button);

        Water water = new Water(WIDTH, HEIGHT);
        content.add(water);

        Boat boat = new Boat(WIDTH, HEIGHT);
        Boat.thread.forEach(Thread::suspend);
        content.add(boat);

        Settings settings = new Settings(WIDTH, HEIGHT, boat);
        content.add(settings);

        new Thread(this::runWin).start();
    }
    public static void main(String[] args) {
        Main frame = new Main();
        frame.setVisible(true);
    }

    public void triggerOnWin() {
        winFlag = true;
    }

    public void runWin() {
        while (!winFlag) {
            try {
                Thread.sleep(60);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        winFlag = false;
        onWin();
    }

    public void onWin() {
        System.out.println("Win");

        Boat.Run = false;
        Boat.thread.forEach(
                e -> {
                    try {
                        e.join();
                    } catch (Exception ignored) {
                    }
                }
        );


        Project.Run = false;
        Project.thread.forEach(
                e -> {
                    try {
                        e.join();
                    } catch (Exception ignored) {
                    }
                }
        );


        getContentPane().removeAll();
        JPanel content = new JPanel(null);
        setContentPane(content);
        content.add(new Win(WIDTH, HEIGHT));
        content.repaint();/*загрязнено*/
        content.revalidate();/*пересчёт макета*/
    }
}
