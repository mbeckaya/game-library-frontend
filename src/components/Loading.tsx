import { ArrowPathIcon } from '@heroicons/react/24/solid';

const Loading = () => (
    <p className="flex items-center gap-1">
        <ArrowPathIcon className="animate-spin h-4 w-4 text-blue-500" />
        <span>Loading...</span>
    </p>
);

export default Loading;