import * as ScrollArea from "@radix-ui/react-scroll-area";
import {scrollArea as scrollAreaTheme} from "@tailus/themer-scroll-area"

const ScrollAreaUI = () => (
    <ScrollArea.Root className="h-full w-fit overflow-hidden">
        <ScrollArea.Viewport className="flex h-full w-full snap-x snap-proximity scroll-pl-12 items-center">
            <div className="flex items-center gap-12 px-12">
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://img.freepik.com/free-photo/gorilla-closeup-from-side-view_488145-1603.jpg?w=1800&t=st=1692080021~exp=1692080621~hmac=5c53b171def22f37d8082f8534f1e917d2e3f739577182cf1f3ecb412d1fb4b9" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://img.freepik.com/free-photo/wet-muddy-elephant-playing-around-puddle-water-jungle_181624-10837.jpg?w=1800&t=st=1691738273~exp=1691738873~hmac=1c0dff4bfcf739fb8c9fe452e0d71f672d471d542fc2242ade7017db6cd400b0" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://images.unsplash.com/photo-1660374509603-a51e49ae07a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://images.unsplash.com/photo-1519900627059-a45ee0f54da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://images.unsplash.com/photo-1666808887221-d4a06ad2dc87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
                <div className="min-w-[16rem] max-w-[16rem] snap-center">
                    <img className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]" src="https://images.unsplash.com/photo-1664331746392-cb3a90a8c1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
                    <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
                        <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
                </div>
            </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={scrollAreaTheme.bar.vertical} orientation="vertical">
            <ScrollArea.Thumb className={scrollAreaTheme.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className={scrollAreaTheme.bar.horizontal} orientation="horizontal">
            <ScrollArea.Thumb className={scrollAreaTheme.thumb} />
        </ScrollArea.Scrollbar>
    </ScrollArea.Root>
);


export default ScrollAreaUI