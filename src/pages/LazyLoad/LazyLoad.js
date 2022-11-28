import { lazy, Suspense, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../utils/loading";


const LazyLoad = () => {
    const [showPreview, setShowPreview] = useState(false);
    const TestLazy = lazy(() => delayForDemo(import('../../utils/exampleLazy.js')));
    const [markdown, setMarkdown] = useState('Hello, **world**!');

    function delayForDemo(promise) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        }).then(() => promise);
    }

    return (
        <>
            <Header />
            <h1>
                Buenas
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        
            <label>
                <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
                Show preview
            </label>

            {showPreview && (
                <Suspense fallback={<Loading/>}>
                    <h2>Se ha realizad el Lazy</h2>
                    <TestLazy markdown={markdown} />
                </Suspense>
            )}
        </>
    )
}
export default LazyLoad;