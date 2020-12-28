import React, { useEffect, useRef, useState } from "react";
import {EditorState} from 'prosemirror-state'
import {EditorView} from 'prosemirror-view'
import {schema}  from "../../model/schema"
import {exampleSetup} from "prosemirror-example-setup"
import './editor.css'

const Editor = () => {
  const editorRef = useRef()
  const [, setEditorView] = useState(null);

  const editorState = EditorState.create({schema: schema, plugins: exampleSetup({schema: schema})})
  
  useEffect(()=>{
    const editorView = new EditorView(editorRef.current, {state: editorState})
    setEditorView(editorView)
  },[])

 return <div id="editorContainer">
   <div id="editor" ref={editorRef}></div>
 </div>
}

export default Editor