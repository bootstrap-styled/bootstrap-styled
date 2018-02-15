/* eslint-disable */
// lib/styleguide/StyleGuideRenderer.js
import React from 'react';
import Markdown from 'rsg-components/Markdown';

const StyleGuideRenderer = ({
                              title,
                              homepageUrl,
                              components,
                              toc,
                              hasSidebar,
                            }) => (
                              <div className="root">
                                <h1>{title}</h1>
                                <main className="wrapper">
                                  <div className="content">
                                    {components}
                                    <footer className="footer">
                                      <Markdown
                                        text={`Generated with [React Styleguidist](${homepageUrl})`}
                                      />
                                    </footer>
                                  </div>
                                  {hasSidebar && <div className="sidebar">{toc}</div>}
                                </main>
                              </div>
);

export default StyleGuideRenderer;
