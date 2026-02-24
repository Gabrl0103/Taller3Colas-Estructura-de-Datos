// ============================================================
// TALLER #2: ESTRUCTURAS DE DATOS - Taller Colas
// Caso de Estudio: Renderizado "GStudio22"
// ============================================================


interface ProyectoRender {
    id: string;
    nombreArchivo: string;
    artista: string;      
    frames: number;       
}


class RenderQueue {
    private fila: ProyectoRender[] = [];

   
    encolar(item: ProyectoRender): void {
        this.fila.push(item);
        console.log(`Recibido: ${item.nombreArchivo} (${item.artista})`);
    }

    
    desencolar(): void {
        if (this.estaVacia()) {
            console.log("Nada que procesar.");
            return;
        }
        const procesado = this.fila.shift();
        console.log(`${procesado?.nombreArchivo}`);
    }


    verSiguiente(): ProyectoRender | undefined {
        return this.fila[0];
    }

    estaVacia(): boolean {
        return this.fila.length === 0;
    }

    totalTareas(): number {
        return this.fila.length;
    }

    imprimirLista(): void {
        console.log("\n LISTA DE ESPERA ACTUAL ");
        if (this.estaVacia()) {
            console.log("Vaciado completo, servidores en funcionamiento.");
        } else {
            this.fila.forEach((p, i) => {
                console.log(`${i + 1}. ${p.nombreArchivo} | Por: ${p.artista}`);
            });
        }
        console.log("------------------------------\n");
    }
}



const miEstudio = new RenderQueue();

// Queue
miEstudio.encolar({ id: "NP-01", nombreArchivo: "Caminata_Robot_V02", artista: "Gabriel_VFX", frames: 222 });
miEstudio.encolar({ id: "NP-02", nombreArchivo: "Explosion_Planeta_Final", artista: "Maria_Art", frames: 222 });
miEstudio.encolar({ id: "NP-03", nombreArchivo: "Invasion_Alien_Afrodisiaca", artista: "Ibrahimovic_PRIME", frames: 777 });


miEstudio.imprimirLista();


console.log("Iniciando renderizado del primer elemento...");
miEstudio.desencolar();


console.log(`\nTareas restantes: ${miEstudio.totalTareas()}`);
miEstudio.imprimirLista();