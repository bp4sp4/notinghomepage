"use client";

import { File, Folder, Tree } from "../../components/magicui/file-tree";

export default function FileTreeComponents() {
  return (
    <section className="h-screen flex items-center flex-col justify-center">
      <h1>홈페이지 구성이 이렇게 되어있어요.</h1>
      <div className="relative flex h-[500px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <Tree
          className="overflow-hidden rounded-md bg-background p-2"
          initialSelectedId="7"
          initialExpandedItems={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
          ]}
          elements={ELEMENTS}
        >
          <Folder element="src" value="1">
            <Folder value="2" element="app">
              <File value="3">
                <p>layout.tsx</p>
              </File>
              <File value="4">
                <p>page.tsx</p>
              </File>
              <File value="5">
                <p>globals.css</p>
              </File>
              <Folder value="6" element="components">
                <File value="7">
                  <p>FileTree.tsx</p>
                </File>
                <File value="8">
                  <p>Footer.tsx</p>
                </File>
                <File value="9">
                  <p>SectionIntro.tsx</p>
                </File>
                <File value="10">
                  <p>SectionShape.tsx</p>
                </File>
                <File value="11">
                  <p>SectionText.tsx</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="12" element="components">
              <Folder value="13" element="magicui">
                <File value="14">
                  <p>bento-grid.tsx</p>
                </File>
                <File value="15">
                  <p>file-tree.tsx</p>
                </File>
                <File value="16">
                  <p>flip-text.tsx</p>
                </File>
              </Folder>
              <Folder value="17" element="ui">
                <File value="18">
                  <p>button.tsx</p>
                </File>
                <File value="19">
                  <p>scroll-area.tsx</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="20" element="lib">
              <File value="21">
                <p>utils.ts.tsx</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
    </section>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
          {
            id: "5",
            isSelectable: true,
            name: "globals.css",
          },
          {
            id: "6",
            isSelectable: true,
            name: "newComponent",
            children: [
              {
                id: "7",
                isSelectable: true,
                name: "FileTree.tsx",
              },
              {
                id: "8",
                isSelectable: true,
                name: "Footer.tsx",
              },
              {
                id: "9",
                isSelectable: true,
                name: "SectionIntro.tsx",
              },
              {
                id: "10",
                isSelectable: true,
                name: "SectionShape.tsx",
              },
              {
                id: "11",
                isSelectable: true,
                name: "SectionText.tsx",
              },
            ],
          },
        ],
      },
      {
        id: "20",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "21",
            isSelectable: true,
            name: "bento-grid.tsx",
          },
        ],
      },
      {
        id: "12",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "13",
            isSelectable: true,
            name: "magicui",
            children: [
              {
                id: "14",
                isSelectable: true,
                name: "bento-grid.tsx",
              },
              {
                id: "15",
                isSelectable: true,
                name: "file-tree.tsx",
              },
              {
                id: "16",
                isSelectable: true,
                name: "flip-text.tsx",
              },
            ],
          },
          {
            id: "17",
            isSelectable: true,
            name: "ui",
            children: [
              {
                id: "18",
                isSelectable: true,
                name: "button.tsx",
              },
              {
                id: "19",
                isSelectable: true,
                name: "scroll-area.tsx",
              },
            ],
          },
        ],
      },
    ],
  },
];
