import javax.swing.*;
import java.awt.*;

public class Water extends JPanel {// компонентов-контейнеров

    public Water(int parentWidth, int parentHeight) {
        setBackground(new Color(0, 0, 255, 50));
        setSize(parentWidth, parentHeight/2 + Boat.HEIGHT);
        setLocation(0, parentHeight / 2 - Boat.HEIGHT);
    }
}