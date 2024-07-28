<script lang="ts">
  import { gsap } from 'gsap';
  import { afterUpdate } from 'svelte';

  type Pointer = {
    x: number;
    y: number;
  };

  gsap.defaults({ ease: 'none' });

  const svgns = 'http://www.w3.org/2000/svg';
  let cursor: SVGSVGElement | null = null;
  const ease = 0.75;

  afterUpdate(() => {
    const pointer: Pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.addEventListener('mousemove', function (event: MouseEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });

    let leader: Pointer | SVGLineElement = pointer;

    const total = 150;
    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i);
    }

    function createLine(leader: Pointer | SVGLineElement, i: number): SVGLineElement {
      const line = document.createElementNS(svgns, 'line');
      if (cursor) {
        cursor.appendChild(line);
      }

      gsap.set(line, { x: -15, y: -15, alpha: (total - i) / total });

      gsap.to(line, {
        duration: 200,
        x: '+=1',
        y: '+=1',
        repeat: -1,
        modifiers: {
          x: function () {
            const posX = parseFloat(gsap.getProperty(line, 'x') as string);
            const leaderX = parseFloat(gsap.getProperty(leader, 'x') as string);

            const x = posX + (leaderX - posX) * ease;
            line.setAttribute('x2', (leaderX - x).toString());
            return x;
          },
          y: function () {
            const posY = parseFloat(gsap.getProperty(line, 'y') as string);
            const leaderY = parseFloat(gsap.getProperty(leader, 'y') as string);

            const y = posY + (leaderY - posY) * ease;
            line.setAttribute('y2', (leaderY - y).toString());
            return y;
          },
        },
      });

      return line;
    }
  });
</script>

<svg bind:this={cursor} class="cursor z-[-1]"></svg>
