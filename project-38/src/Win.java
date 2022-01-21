
import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;

public class Win extends JPanel {
    private int WidthParent;
    private int HeightParent;

    private static BufferedImage winPicture;

    static {
        try {
            winPicture = ImageIO.read(new File("resources/win.png"));
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public Win(int WidthParent, int HeightParent){
        this.HeightParent = HeightParent;
        this.WidthParent = WidthParent;
        setSize(new Dimension(WidthParent, HeightParent));
        setLocation(0, 0);
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawImage(winPicture, 0, 0, WidthParent, HeightParent, this);
    }
}

