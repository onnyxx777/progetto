export interface Movie {
    
    id: number;

    title: string;

    image: string;

    categories: Array<string>;

    plot: string;

    cast?: string;

    //director?: Array<{ name: string; age: number }>; 
 }
