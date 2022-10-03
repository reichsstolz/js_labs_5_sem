class Clock
{
    constructor(context, x0, y0, radius)
    {
        this.context = context;
        this.image_data = this.context.getImageData(0, 0, canvas.width, canvas.height);
        this.x0 = x0;
        this.y0 = y0;
        this.radius = radius;
        this.angle = 0;
    }

    start()
    {
        setInterval(this.draw.bind(this), 50);
    }

    draw()
    {
        if (this.angle < 360)
        {
            let [first, second] = this.calculate_circle(this.angle, this.radius, this.x0, this.y0);
            this.draw_line(this.x0, this.y0, first, second, Color.Blue);
            // this.set_pixel(first, second, this.x0, this.y0);

            this.angle++;
        }
    }

    calculate_circle(angle, radius, x0, y0)
    {
        let radian_angle = angle * 2*Math.PI/360;
        console.log("radian angle: ", radian_angle);
        let x = Math.round(radius*Math.cos(radian_angle)) + x0;
        let y = Math.round(radius*Math.sin(radian_angle)) + y0;
        console.log("circle coordinates [inside]: ", x, y);

        return [x, y];
    }

    draw_line(x1, y1, x2, y2, color)
    {
        let dx = x2 - x1;
        let dy = y2 - y1;
        
        let sign_x = (dx > 0) ? 1 : (dx < 0) ? -1 : 0;
        let sign_y = (dy > 0) ? 1 : (dy < 0) ? -1 : 0;
        
        if (dx < 0) { dx = -dx; }
        if (dy < 0) { dy = -dy; }
        
        if (dx > dy)
        {
            var pdx = sign_x;
            var pdy = 0;
            var es = dy;
            var el = dx;
        }
            
        else
        {
            var pdx = 0;
            var pdy = sign_y;
            var es = dx;
            var el = dy;
        }
        
        let x = x1;
        let y = y1;
        let error = el/2;
        let t = 0;       
        
        this.set_pixel(x, y, color);
        
        while (t < el)
        {
            error -= es
            if (error < 0)
            {
                error += el;
                x += sign_x;
                y += sign_y;
            } 
            else
            {
                x += pdx;
                y += pdy;
            }
                
            t += 1;
            this.set_pixel(x, y, color);
        }
    }

    convert_coordinate(x, y)
    {
        return(y*(canvas.width)*4+x*4);
    }
    
    set_pixel(x, y, color)
    {
        this.image_data.data[this.convert_coordinate(x, y)] = color.red;
        this.image_data.data[this.convert_coordinate(x, y)+1] = color.green;
        this.image_data.data[this.convert_coordinate(x, y)+2] = color.blue;
        this.image_data.data[this.convert_coordinate(x, y)+3] = color.alpha;
        this.context.putImageData(this.image_data, 0, 0);
    }

    clear_place()
    {
        for (let x=this.x0-this.radius; x <= this.x0+this.radius; x++)
        {
            for (let y=this.y0-this.radius; x <= this.y0+this.radius; y++)
            {
                this.set_pixel(x, y, Color.White);
            }
        }
    }
}
