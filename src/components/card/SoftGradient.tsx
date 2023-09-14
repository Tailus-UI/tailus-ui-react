import { softGradientVariant as cardTheme } from '@tailus/themer-card';

const CardSoftGradientVariant = () => (
    <div className={cardTheme.outer + " max-w-xs"}>
        <div className={cardTheme.inner}>
            <div>
                <img className="h-full w-full object-cover dark:hidden" src="http://127.0.0.1:5173/legend.png" alt="" />
                <img className="hidden h-full w-full object-cover dark:block" src="http://127.0.0.1:5173/legend-dark.png" alt="" />
            </div>
            <div className="relative z-10 mt-6 space-y-3 text-center">
                <h3 className="text-xl font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">Provident fugit vero voluptate dolores voluptates a sapiente.</p>
            </div>
        </div>
    </div>
)

export default CardSoftGradientVariant