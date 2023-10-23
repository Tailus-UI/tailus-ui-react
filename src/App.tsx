import { Card } from "./components/card/Card";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Card variant='outlined' padding={9} className="max-w-xs">
                <div className='aspect-auto'>
                    <img className="h-full w-full object-cover dark:hidden" src="/legend.png" alt="tailus card stats img" height={688} width={1168} />
                    <img className="hidden h-full w-full object-cover dark:block" src="/legend-dark.png" alt="tailus card dark stats img" height={688} width={1168} />
                </div>
                <div className="relative z-10 mt-6 space-y-3 text-center">
                    <h3 className="text-xl font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">Provident fugit vero voluptate dolores voluptates a sapiente.</p>
                </div>
            </Card>
        </div>
    );
}

export default App;