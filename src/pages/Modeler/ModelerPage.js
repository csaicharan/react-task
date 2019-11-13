import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "bpmn-js/dist/assets/diagram-js.css";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import React, { useEffect, useRef } from 'react';
import { Modeler } from './Modeler.styled';
// export a modeler page component
// use the Modeler to instantiate a modeler instance

const BpmnViewer = new BpmnJS();
const DetachBpmnViewer = () => {
    BpmnViewer.detach();
};
const AttachBpmnViewer = (eleRef) => {
    BpmnViewer.attachTo(eleRef);
}

/**
 * To render modeler container
 * @param {*} modelerContainerRef Modeler container reference to render modeler 
 */
const RenderModeler = (modelerContainerRef) => {
    return (
        <div>
            <h1>Modeler</h1>
            <Modeler
                ref={modelerContainerRef}
                id="modeler-viewer"
            >
            </Modeler>
        </div>
    )
}

const ModelerPage = () => {

    const ModelerContainer = useRef(null); // Element reference for Bpmn Container

    /**
     * useEffect is the substitute of componentDidMount in functional components
     */
    useEffect(() => {

        AttachBpmnViewer(ModelerContainer.current); // Attaching Bpmn viewer to this component

        return () => {
            DetachBpmnViewer(); // Detaching Bpmn component when unmounted
        }
    });

    return RenderModeler(ModelerContainer);
}

export default ModelerPage;
