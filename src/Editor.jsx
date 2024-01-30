import React, { Component, useEffect, useState } from "react";
import Editor from "@draft-js-plugins/editor";
// import createMarkdownShortcutsPlugin from "draft-js-markdown-shortcuts-plugin";
import { EditorState, convertToRaw, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import createMarkdownConvertPlugin from "@draft-js-enhance-plugins/markdown-convert";

import { stateToMarkdown } from "draft-js-export-markdown";
import { stateFromMarkdown } from "draft-js-import-markdown";
import { toast, Bounce } from "react-toastify";

const plugins = [createMarkdownConvertPlugin()];

function DemoEditor() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const markdown = stateToMarkdown(editorState.getCurrentContent());

	const gottenText = editorState.getCurrentContent();

	// console.log("Old Text: ", oldText.toString().replace(/,/g, "\n"));
	// console.log("MarkDown: ", markdown);

	function insertCharacter(characterToInsert, editorState) {
		const currentContent = editorState.getCurrentContent(),
			currentSelection = editorState.getSelection();

		const newContent = Modifier.replaceText(
			currentContent,
			currentSelection,
			characterToInsert
		);

		const newEditorState = EditorState.push(
			editorState,
			newContent,
			"insert-characters"
		);

		return newEditorState;
	}

	useEffect(() => {
		let contentState = stateFromMarkdown(
			localStorage.getItem("text").toString()
		);
		let newEditorState = EditorState.push(editorState, contentState);
		setEditorState(newEditorState);
	}, [markdown]);

	const onClick = () => {
		localStorage.setItem("text", markdown);
		toast("Saved!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	};

	return (
		<>
			<div className='wrapper'>
				<div className='btn_wrap'>
					<button onClick={onClick} id='bottone1'>
						Save
					</button>
				</div>
				<div className='editor'>
					<Editor
						editorState={editorState}
						onChange={setEditorState}
						plugins={plugins}
						className='typing_editor'
					/>
				</div>
			</div>
		</>
	);
}

export default DemoEditor;
