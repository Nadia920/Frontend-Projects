import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.image.BufferedImage;
import java.io.File;

public class Settings extends JPanel  {
    public static final int WIDTH = 40;
    public static final int HEIGHT = 100;
    public static boolean Run = true;
    private static BufferedImage base;
    private static BufferedImage gun;

    static {
        try {
            base = ImageIO.read(new File("resources/base.png"));
            gun = ImageIO.read(new File("resources/gun.png"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private final int PositionY;
    private final int PositionX;
    private final int WidthParent;
    private final int HeightParent;

    private final Boat boat;

    public Settings(int WidthParent, int HeightParent, Boat boat) {
        setSize(new Dimension(WIDTH, HEIGHT));
        addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {
            }

            @Override
            public void mousePressed(MouseEvent e) { //Вызывается при нажатии кнопки мыши на компоненте.
                if (Run && Project.thread.stream().noneMatch(Thread::isAlive)) shoot();
            }

            @Override
            public void mouseReleased(MouseEvent e) {//Вызывается, когда на компоненте отпускается кнопка мыши.
            }

            @Override
            public void mouseEntered(MouseEvent e) {//Вызывается, когда мышь входит в компонент.
            }

            @Override
            public void mouseExited(MouseEvent e) {//Вызывается, когда мышь покидает компонент.
            }
        });
        this.HeightParent = HeightParent;
        this.WidthParent = WidthParent;
        this.PositionX = WidthParent / 2 - WIDTH / 2;
        this.PositionY = HeightParent - HEIGHT - 30;
        this.boat = boat;
        setLocation(PositionX, PositionY);
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawImage(gun, 0, 0, (int) (WIDTH * 0.7), (int) (HEIGHT * 0.7), this);
        g.drawImage(base, 0, (int) (HEIGHT * 0.70), WIDTH, (int) (HEIGHT * 0.30), this);
    }

    private void shoot() {
        synchronized (getParent()) {
            getParent().add(new Project(WidthParent, HeightParent, PositionX, PositionY, boat));
        }
    }

}
