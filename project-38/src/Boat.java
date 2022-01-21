import javax.imageio.ImageIO;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.ArrayList;
import java.util.Random;
public class Boat extends JPanel {
    private static final int WIDTH = 100;
    public static final int HEIGHT = 98;

    private static BufferedImage boatPicture;
    public static BufferedImage bangPicture;

    public static java.util.List<Thread> thread = new ArrayList<Thread>();//

    static {
        try {
            boatPicture = ImageIO.read(new File("resources/boat.png"));
            bangPicture = ImageIO.read(new File("resources/boom.png"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private final int WidthParent;
    private final int HeightParent;
    private final Random random;
    private final int PositionY;
    private int PositionX;
    private int speed;
    public static boolean Run = true;

    public Boat(int WidthParent, int HeightParent) {
        setSize(new Dimension(WIDTH, HEIGHT));//размеры объекта
        this.WidthParent = WidthParent;
        this.HeightParent = HeightParent;
        this.random = new Random();
        this.PositionY = this.HeightParent / 2 - HEIGHT*2;
        hitFlag = false;
        clear();

        Thread t = new Thread(this::run);
        thread.add(t);
        t.start();
    }

    private void clear() {
        this.PositionX = -WIDTH;
        this.speed = 3 + random.nextInt(10);
    }

    private void run() {
        while (Run) {
            if(hitFlag){
                hitFlag = false;
                hit();
                continue;
            }

            PositionX += speed;
            this.setLocation(PositionX, PositionY);
            repaint();

            if (PositionX > WidthParent) {
                clear();
            }

            try {
                Thread.sleep(15);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawImage(boatPicture, 0, 0, WIDTH, HEIGHT, this);
    }

    private void sound() {
        try {
            AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(new File("resources/boom.wav"));
            Clip clip = AudioSystem.getClip();
            clip.open(audioInputStream);
            clip.stop();
            clip.start();
        } catch (Exception e) {
            e.printStackTrace();
        }

        double scope = 0;
        while (scope <= 1) {
            this.getGraphics().drawImage(
                    bangPicture,
                    (WIDTH - (int) (WIDTH * scope))/2,
                    (HEIGHT - (int) (HEIGHT * scope))/2,
                    (int) (WIDTH * scope),
                    (int) (HEIGHT * scope),
                    this);
            try {
                Thread.sleep(15);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            scope += .15;
        }
    }

    public boolean isHit(int PositionX, int PositionY) {
        if (PositionX >= this.PositionX && PositionX <= this.PositionX + WIDTH) {
            return PositionY <= this.PositionY + HEIGHT;
        }
        return false;
    }

    private boolean hitFlag;

    public void HitTrigger(){
        hitFlag = true; thread.forEach(Thread::resume);
    }

    private void hit() {
        sound();
        clear();
        updateWinCondition();
    }

    private static final int hitToWin = 1;
    private int winCounter = 0;

    private void updateWinCondition(){
        winCounter++;
        if(winCounter >= hitToWin){
            var p = getParent().getParent().getParent().getParent();
            ((Main)p).triggerOnWin();
        }
    }
}
