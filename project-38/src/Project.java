import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.ArrayList;
public class Project extends JPanel {
    public static final int WIDTH = 15;
    public static final int HEIGHT = 45;

    private int PositionX;
    private int PositionY;

    private final int WidthParent;
    private final int HeightParent;

    public static boolean Run = true;
    private final int speed = 5;
    private final Boat boat;

    private static BufferedImage project;
    public static java.util.List<Thread> thread = new ArrayList<Thread>();

    static {
        try {
            project = ImageIO.read(new File("resources/rocket.png"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public Project(int WidthParent, int HeightParent, int startX, int startY, Boat boat){
        setSize(new Dimension(WIDTH, HEIGHT));
        this.WidthParent = WidthParent;
        this.HeightParent = HeightParent;
        PositionX = startX+5;
        PositionY = startY;
        this.boat = boat;
        Thread t = new Thread(this::run);
        thread.add(t);
        t.start();
    }

    private void run() {
        while (Run) {
            PositionY -= speed;
            this.setLocation(PositionX, PositionY);
            repaint();

            if (PositionY < - HEIGHT) {
                synchronized(getParent()) {//
                    getParent().remove(this);
                }
                return;
            }

            if(boat.isHit(PositionX, PositionY)){
                synchronized(getParent()) {
                    getGraphics().clearRect(0, 0, WIDTH, HEIGHT);
                    PositionY = -2 * HEIGHT;
                    boat.HitTrigger();
                }
            }

            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawImage(project, 0, 0, WIDTH, HEIGHT, this);
    }
}
