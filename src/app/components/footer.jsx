export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">Piscinas CR</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300 transition-colors">Inicio</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Proyectos</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}